/* eslint-disable no-console -- 터미널에서 직접 실행하는 스크립트라 결과를 콘솔로 알린다 */
// 사진 한 장을 갤러리에 추가한다.
//   pnpm photo:add <사진 경로> ["설명 한 줄"]
// - 긴 쪽 2400px로 줄이고 메타데이터(위치 포함)를 모두 지운 JPEG로 저장한다. 원본은 그대로 둔다.
// - 촬영 날짜·카메라·렌즈는 원본 EXIF에서 읽어 src/content/photos/<이름>.md 에 적는다.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { basename, extname, join } from "node:path";
import sharp from "sharp";
import exifReader from "exif-reader";

const PHOTOS_DIR = "src/content/photos";
const IMAGES_DIR = join(PHOTOS_DIR, "images");
const MAX_EDGE = 2400;

const [src, caption = ""] = process.argv.slice(2);
if (!src || !existsSync(src)) {
  console.error('사용법: pnpm photo:add <사진 경로> ["설명 한 줄"]');
  process.exit(1);
}

const meta = await sharp(src).metadata();
const exif = meta.exif ? exifReader(meta.exif) : {};
const taken = exif.Photo?.DateTimeOriginal ?? exif.Image?.DateTime;
// exif-reader는 카메라에 찍힌 현지 시각을 UTC 값으로 돌려준다. 그대로 날짜만 꺼낸다.
const date = taken ? taken.toISOString().slice(0, 10) : null;
// EXIF 문자열 끝의 널 문자·공백 제거
const clean = v => (v ?? "").replace(/\0/g, "").trim();
const make = clean(exif.Image?.Make);
const model = clean(exif.Image?.Model);
// 니콘은 Z6III를 "Z6_3"으로 적는다 → 마케팅 이름(로마 숫자)으로 바꾼다
const ROMAN = { 2: "II", 3: "III", 4: "IV" };
const camera = (model.startsWith(make.split(" ")[0]) ? model : `${make} ${model}`)
  .replace(/_(\d)$/, (_, n) => ROMAN[n] ?? n)
  .trim();
const lens = clean(exif.Photo?.LensModel);

const name = `${date ? date.replaceAll("-", "") + "-" : ""}${basename(src, extname(src)).toLowerCase()}`;
const outImage = join(IMAGES_DIR, `${name}.jpg`);
const outEntry = join(PHOTOS_DIR, `${name}.md`);
if (existsSync(outEntry)) {
  console.error(`이미 있는 사진입니다: ${outEntry}`);
  process.exit(1);
}

mkdirSync(IMAGES_DIR, { recursive: true });
// rotate(): EXIF 방향대로 돌린 뒤 저장. sharp는 기본으로 메타데이터를 남기지 않는다.
const info = await sharp(src)
  .rotate()
  .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(outImage);

const yaml = (v) => JSON.stringify(v);
writeFileSync(
  outEntry,
  [
    "---",
    `image: ./images/${name}.jpg`,
    `caption: ${yaml(caption)}`,
    date ? `date: ${date}` : "date: # YYYY-MM-DD",
    `camera: ${yaml(camera)}`,
    `lens: ${yaml(lens)}`,
    "---",
    "",
  ].join("\n")
);

console.log(
  `${outEntry}\n${outImage} (${info.width}×${info.height}, ${Math.round(info.size / 1024)}KB)\n날짜 ${date ?? "없음"} · ${camera} · ${lens}`
);
