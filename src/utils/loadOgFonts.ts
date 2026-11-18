import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";

const require = createRequire(import.meta.url);

/**
 * OG 이미지(satori)용 Pretendard 폰트.
 *
 * 빌드 시 node_modules/pretendard의 OTF를 직접 읽는다. 네트워크가 필요 없고,
 * 한글·영문이 한 파일에 모두 있어 글자별 폰트 대체도 필요 없다.
 */
export async function loadOgFonts() {
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
