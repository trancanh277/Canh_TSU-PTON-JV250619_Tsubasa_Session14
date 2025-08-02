let danhsach = [
    {
        id: 1,
        name: "Truyện Kiều",
        tacgia: "Nguyễn Du",
        nam: 2021,
    },
    {
        id: 2,
        name: "Dế mèn phiêu lưu ký",
        tacgia: "Tô Hoài",
        nam: 2017,
    },
];
let menu = `1. Thêm sách mới.
2. Hiển thị danh sách.
3. Tìm kiếm sách theo tên.
4. Xóa sách theo ID.
5. Thoát chương trình.`;
loop = true;
while (loop === true) {
    let luachon = +prompt(menu);
    switch (luachon) {
        case 1:
            let id = +prompt("Mời nhập vào id sách");
            let name = prompt("Mời nhập vào tên sách");
            let tacgia = prompt("Mời nhập vào tên tác giả");
            let namxuatban = +prompt("Mời nhập vào năm xuất bản");
            let themmoi = {
                id: id,
                name: name,
                tacgia: tacgia,
                nam: namxuatban,
            }
            danhsach.push(themmoi);
            break;
        case 2:
            indanhsach();
            break;
        case 3:
            let timkiem = prompt("Mời nhập tên sách cần tìm");
            let timkiemname = timkiem.toLowerCase();
            let timkiemIndex = -1;
            for (i = 0; i <= danhsach.length - 1; i++) {
                if (danhsach[i].name.toLowerCase() === timkiemname) {
                    timkiemIndex = 1;
                }
            }
            if (timkiemIndex === -1) {
                console.log("Sách bạn cần tìm không có trong danh sách");
            } else {
                console.log(danhsach[timkiemIndex])
            }
            break;

        case 4:
            let xoaid = +prompt("Mời nhập vào id cần xóa");
            let xoaidIndex = -1;
            for (i = 0; i <= danhsach.length - 1; i++) {
                if (danhsach[i].id === xoaid) {
                    xoaidIndex = 1;
                }
            }
            if (xoaidIndex === -1) {
                console.log("Sách bạn muốn xóa không có trong danh sách")
            } else {
                danhsach.splice(xoaidIndex, 1);
                indanhsach();
                break;
            }
            
        case 5:
            console.log("Cảm ơn bạn đã ghé thăm");
            loop = false;
            break;
    }
}
function indanhsach() {
    for (i = 0; i <= danhsach.length - 1; i++) {
        console.log(`${i + 1}. ID sách: ${danhsach[i].id},
                Tên sách: ${danhsach[i].name}.
                Tác giả: ${danhsach[i].tacgia}`);
    }

}