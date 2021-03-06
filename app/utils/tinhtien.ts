import { toNumber } from './xulynumber';

interface Thongso {
  day: string;
  dai?: string;
  donvitinh?: string;
  a: string;
  b?: string;
  c?: string;
  a1?: string;
  cong1?: number;
  cong2?: number;
  cong3?: number;
}

const tinhdongia = (loaihang, thongso: Thongso) => {
  // loaihang : string. ex: T1, CNC2, ...
  // thongso: Object {day: ..., dai: ..., ...}
  // convert thongso type: Number
  // m: day, a: a, b: b, c: c, a1: a1, q: dai,
  // k: cong1; k2: cong2; k3: cong3
  // return  dongia cua 1 loai hang
  let dongia = 0;
  const m = parseInt(thongso.day, 10);
  const q = parseInt(thongso.dai, 10);
  const a = parseInt(thongso.a, 10);
  const b = parseInt(thongso.b, 10);
  const c = parseInt(thongso.c, 10);
  const a1 = parseInt(thongso.a1, 10);

  const k = thongso.cong1 !== 0 ? toNumber(thongso.cong1) : 0;
  const k2 = thongso.cong2 !== 0 ? toNumber(thongso.cong2) : 0;
  const k3 = thongso.cong3 !== 0 ? toNumber(thongso.cong3) : 0;

  switch (loaihang) {
    case 'T1':
      dongia = (m * a * b * 7.85 * k) / 1000000;
      break;
    case 'T2':
      dongia = (m * a * b * 7.85 * k) / 1000000 + c * k2;
      break;
    case 'T3':
      dongia = (((m * (a + c)) / 2) * b * 7.85 * k) / 1000000;
      break;
    case 'T4':
      dongia = (((m * (a + c)) / 2) * b * 7.85 * k) / 1000000;
      break;
    case 'T5':
      dongia = (m * a * a * 6.25 * k * 1.15) / 1000000 + (a * 3.14 * k2) / 1000;
      break;
    case 'T6':
      dongia =
        (m * a * a * 6.25 * k * 1.15) / 1000000 +
        (a * 3.14 * k2) / 1000 +
        (b * 3.14 * k2) / 1000;
      break;
    case 'T7':
      dongia =
        (m * a * a * 6.25 * k * 1.15) / 1000000 +
        (a * 3.14 * k2) / 1000 +
        (b * 3.14 * k2) / 1000 -
        (m * b * b * 6.25 * k3) / 1000000;
      break;

    case 'C1':
      dongia = (m * (a + b + c) * q * 7.85 * k) / 1000000;
      break;
    case 'C2':
      dongia = (m * (a * 2 + b) * q * 7.85 * k) / 1000000;
      break;
    case 'C3':
      dongia = (m * (a + b) * q * 7.85 * k) / 1000000;
      break;
    case 'C4':
      dongia = (m * (a1 * 2 + b + a1 * 2) * q * 7.85 * k) / 1000000;
      break;
    case 'C5':
      dongia = (m * (a + b + c) * q * 7.85 * k) / 1000000;
      break;
    case 'C6':
      dongia = (m * (a + c * 2) * (b + c * 2) * q * 7.85 * k) / 1000000;
      break;

    case 'Cu1':
      dongia = (m * a * 3.14 * 7.85 * k) / 1000000;
      break;

    case 'Cu3':
      dongia =
        (m *
          (a * 2 + a1 * 2 + (c - b / 2) * 2 + (b * 3.14) / 2) *
          q *
          7.85 *
          k) /
        1000000;
      break;
    case 'CNC1':
      dongia = (m * a * b * 7.85 * k) / 1000000 + (a * b * k2) / 1000000;
      break;
    case 'CNC2':
      dongia = (m * a * b * 7.85 * k) / 1000000 + (a * b * k2) / 1000000;
      break;
    case 'CNC3':
      dongia = (m * a * b * 7.85 * k) / 1000000 + (a * b * k2) / 1000000;
      break;
    default:
      dongia = 0;
      break;
  }
  return dongia;
};

const tinhthanhtien = (dongia, soluong) => {
  return parseInt(dongia, 10) * parseInt(soluong, 10);
};

export { tinhdongia, tinhthanhtien };
