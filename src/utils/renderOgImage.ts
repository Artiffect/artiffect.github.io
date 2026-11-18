import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import satori from "satori";
import sharp from "sharp";

const require = createRequire(import.meta.url);

/**
 * OG 이미지(satori)용 Pretendard 폰트.
 * 빌드 시 node_modules/pretendard의 OTF를 직접 읽는다 (네트워크 불필요).
 */
async function loadOgFonts() {
  const dir = path.join(
    path.dirname(require.resolve("pretendard/package.json")),
    "dist/public/static"
  );
  const [regular, bold] = await Promise.all([
    readFile(path.join(dir, "Pretendard-Regular.otf")),
    readFile(path.join(dir, "Pretendard-Bold.otf")),
  ]);
  return [
    { name: "Pretendard", data: regular, weight: 400, style: "normal" },
    { name: "Pretendard", data: bold, weight: 700, style: "normal" },
  ] as const;
}

// 사이트 라이트 테마와 같은 색 (theme.css)
const C = {
  bg: "#ffffff",
  ink: "#16181b",
  sub: "#454a51",
  chipBg: "#f1f3f5",
  chipInk: "#087f5b",
  accent: "#12b886",
};

type Style = Record<string, string | number>;
type OgNode = { type: string; props: { style: Style; children?: unknown } };
const el = (type: string, style: Style, children?: unknown): OgNode => ({
  type,
  props: { style, children },
});

type OgOptions = {
  title: string;
  description?: string;
  footer: string; // 왼쪽 아래 (사이트 이름·카테고리 또는 주소)
  chips?: string[]; // 오른쪽 아래 태그 칩, 최대 3개
};

/** 1200×630 OG 이미지를 PNG로 그린다. */
export async function renderOgImage({
  title,
  description,
  footer,
  chips = [],
}: OgOptions) {
  const fonts = await loadOgFonts();

  const tree = el(
    "div",
    {
      boxSizing: "border-box",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      background: C.bg,
      padding: "72px 80px",
      borderBottom: `14px solid ${C.accent}`,
      fontFamily: "Pretendard",
      wordBreak: "keep-all",
    },
    [
      el(
        "div",
        { display: "flex", flexDirection: "column" },
        [
          el(
            "div",
            {
              fontSize: title.length > 40 ? 56 : 66,
              fontWeight: 700,
              color: C.ink,
              lineHeight: 1.25,
              letterSpacing: "-0.02em",
              lineClamp: 3,
            },
            title
          ),
          description
            ? el(
                "div",
                { marginTop: 24, fontSize: 32, color: C.sub, lineHeight: 1.5 },
                description
              )
            : null,
        ].filter(Boolean)
      ),
      el(
        "div",
        {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        },
        [
          el("div", { fontSize: 28, fontWeight: 700, color: C.ink }, footer),
          el(
            "div",
            { display: "flex", gap: 12 },
            chips.slice(0, 3).map(chip =>
              el(
                "div",
                {
                  display: "flex",
                  height: 48,
                  padding: "0 22px",
                  alignItems: "center",
                  borderRadius: 24,
                  background: C.chipBg,
                  color: C.chipInk,
                  fontSize: 24,
                  fontWeight: 700,
                },
                chip
              )
            )
          ),
        ]
      ),
    ]
  );

  const svg = await satori(tree as unknown as Parameters<typeof satori>[0], {
    width: 1200,
    height: 630,
    fonts: [...fonts],
  });
  return sharp(Buffer.from(svg)).png().toBuffer();
}
