let danhsach = [
  {
    name: "Trần Hàn",
    age: "23",
    id: 1,
  },
  {
    name: "Dương Khang",
    age: 19,
    id: 2,
  },
];
let menu = `===== Quản Lý Sinh Viên =====
1. Thêm sinh viên mới
2. Hiển thị danh sách sinh viên
3. Xóa sinh viên theo ID
4. Thoát

Nhập lựa chọn (1-4):`
let loop = true;
while (loop === true) {
  let luachon = +prompt(menu);

  switch (luachon) {
    case 1:
      let ten = prompt("Nhập tên sinh viên:");
      let tuoi = +(prompt("Nhập tuổi sinh viên:"));
      let id = prompt("Nhập mã số sinh viên (ID):");

      let sinhvien = {
        name: ten,
        age: tuoi,
        id: id,
      };
      danhsach.push(sinhvien);
      break;
    case 2:
      for (i = 0; i <= danhsach.length - 1; i++) {
        console.log(`${i + 1}. ${danhsach[i].name}. ${danhsach[i].age} tuổi. id ${danhsach[i].id}`)
      }
      console.log("----------------");
      break;
    case 3:
      let xoa = +prompt("Mời nhập id cần xóa");
      let timid = -1;
      for (i = 0; i <= danhsach.length - 1; i++) {
        if (danhsach[i].id === xoa) {
          timid = 1;
        }
        if (timid === -1) {
          console.log("id vào không có trong danh sách");
        }
        else {
          danhsach.splice(timid, 1);
          for (i = 0; i <= danhsach.length - 1; i++) {
            console.log(`${i + 1}. ${danhsach[i].name}. ${danhsach[i].age} tuổi. id ${danhsach[i].id}`)
          }
          break;
        }
      }
    case 4:
      console.log("Cảm ơn bạn đã sử dụng ứng dụng");
      loop = false;
      break;
    default:
      console.log("Giá trị bạn nhập vào không hợp lệ");
      break;
  }

}