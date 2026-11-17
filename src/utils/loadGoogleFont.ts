/**
 * OG 이미지(satori)용 폰트 로더.
 *
 * Google Fonts의 `text` 파라미터로 실제 그릴 글자만 담은 TTF를 받는다.
 * 한글 폰트는 전체 파일이 수 MB라 레포에 넣거나 통째로 받기엔 무겁고,
 * Astro Fonts API가 내려주는 파일은 유니코드 범위별로 쪼개져 있어
 * satori에 하나만 넘기면 일부 글자가 빠진다.
 */
export async function loadGoogleFont(
  family: string,
  weight: number,
  text: string
): Promise<ArrayBuffer> {
  const params = new URLSearchParams({
    family: `${family}:wght@${weight}`,
    text,
  });
  const css = await fetch(`https://fonts.googleapis.com/css2?${params}`).then(
    res => res.text()
  );

  // User-Agent 없이 요청하면 Google Fonts는 TTF(truetype)를 돌려준다 (satori는 woff2 미지원)
  const url = css.match(
    /src: url\((.+?)\) format\('(?:opentype|truetype)'\)/
  )?.[1];
  if (!url) {
    throw new Error(`Cannot find the font file for ${family} ${weight}.`);
  }

  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${family} ${weight}: ${res.status}`);
  }
  return res.arrayBuffer();
}
