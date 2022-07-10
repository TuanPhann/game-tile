/***
 * định nghĩa ra các thông số của bảng
 * chuyển canvas sang dạng 2d
 * I/tạo 1 function constructor dể viết các hàm xây dựng nên bảng
 * 1/ viết 1 hàm trả về 1 array chưa số  lượng hàng và cột
 * 2/ viết hàm dùng canvas để vẻ nên các ô nhỏ trong bảng
 * 3/ viết hàm vẽ toàn bộ ô trong bảng bằng cách loop qua array return trước đó
 *
 * II/viết function constructor tạo nên các khối gạch
 * 1/định nghĩa : id tương đương với mau sắc, layout khối ghạch đầu tiên, các dạng khối gạch,vị trí hiện tại của khối ghách theo hàng và cột
 * 2/ khối ghạch: vẽ, xoá , sang trái, sang phải, xuống dưới, xoay
 * 3/ viết hàm check va chạm
 *
 * III/ viết event keydown để di chuyển trái, phải, xuống, xoay
 * hàm cho khối ghạch tự rơi xuống
 * hàm xử lý khi khối ghạch chạm đáy
 * hàm khi khối ghạch chạm vào khối ghạch khác
 * hàm xử lý khi game over
 * xử lý khi ấn nút play
 */

// const cols = 10;
// const rows = 20;
// const blockSize = 30;
// const color = [
//     'red',
//     'orange',
//     'green',
//     'purple',
//     'blue',
//     'cyan',
//     'yellow',
//     'white',
// ];
// const colorWhite_id = 7;


// // định nghĩa các phím muỗi tên
// const keyCode = {
//     left: 'ArrowLeft',
//     right: 'ArrowRight',
//     down: 'ArrowDown',
//     up: 'ArrowUp'
// }

// // định nghĩa các khối ghạch
// const brickLayout = [
//     [
//         [
//             [1, 7, 7],
//             [1, 1, 1],
//             [7, 7, 7],
//         ],
//         [
//             [7, 1, 1],
//             [7, 1, 7],
//             [7, 1, 7],
//         ],
//         [
//             [7, 7, 7],
//             [1, 1, 1],
//             [7, 7, 1],
//         ],
//         [
//             [7, 1, 7],
//             [7, 1, 7],
//             [1, 1, 7],
//         ],
//     ],
//     [
//         [
//             [7, 1, 7],
//             [7, 1, 7],
//             [7, 1, 1],
//         ],
//         [
//             [7, 7, 7],
//             [1, 1, 1],
//             [1, 7, 7],
//         ],
//         [
//             [1, 1, 7],
//             [7, 1, 7],
//             [7, 1, 7],
//         ],
//         [
//             [7, 7, 1],
//             [1, 1, 1],
//             [7, 7, 7],
//         ],
//     ],
//     [
//         [
//             [1, 7, 7],
//             [1, 1, 7],
//             [7, 1, 7],
//         ],
//         [
//             [7, 1, 1],
//             [1, 1, 7],
//             [7, 7, 7],
//         ],
//         [
//             [7, 1, 7],
//             [7, 1, 1],
//             [7, 7, 1],
//         ],
//         [
//             [7, 7, 7],
//             [7, 1, 1],
//             [1, 1, 7],
//         ],
//     ],
//     [
//         [
//             [7, 1, 7],
//             [1, 1, 7],
//             [1, 7, 7],
//         ],
//         [
//             [1, 1, 7],
//             [7, 1, 1],
//             [7, 7, 7],
//         ],
//         [
//             [7, 7, 1],
//             [7, 1, 1],
//             [7, 1, 7],
//         ],
//         [
//             [7, 7, 7],
//             [1, 1, 7],
//             [7, 1, 1],
//         ],
//     ],
//     [
//         [
//             [7, 7, 7, 7],
//             [1, 1, 1, 1],
//             [7, 7, 7, 7],
//             [7, 7, 7, 7],
//         ],
//         [
//             [7, 7, 1, 7],
//             [7, 7, 1, 7],
//             [7, 7, 1, 7],
//             [7, 7, 1, 7],
//         ],
//         [
//             [7, 7, 7, 7],
//             [7, 7, 7, 7],
//             [1, 1, 1, 1],
//             [7, 7, 7, 7],
//         ],
//         [
//             [7, 1, 7, 7],
//             [7, 1, 7, 7],
//             [7, 1, 7, 7],
//             [7, 1, 7, 7],
//         ],
//     ],
//     [
//         [
//             [7, 7, 7, 7],
//             [7, 1, 1, 7],
//             [7, 1, 1, 7],
//             [7, 7, 7, 7],
//         ],
//         [
//             [7, 7, 7, 7],
//             [7, 1, 1, 7],
//             [7, 1, 1, 7],
//             [7, 7, 7, 7],
//         ],
//         [
//             [7, 7, 7, 7],
//             [7, 1, 1, 7],
//             [7, 1, 1, 7],
//             [7, 7, 7, 7],
//         ],
//         [
//             [7, 7, 7, 7],
//             [7, 1, 1, 7],
//             [7, 1, 1, 7],
//             [7, 7, 7, 7],
//         ],
//     ],
//     [
//         [
//             [7, 1, 7],
//             [1, 1, 1],
//             [7, 7, 7],
//         ],
//         [
//             [7, 1, 7],
//             [7, 1, 1],
//             [7, 1, 7],
//         ],
//         [
//             [7, 7, 7],
//             [1, 1, 1],
//             [7, 1, 7],
//         ],
//         [
//             [7, 1, 7],
//             [1, 1, 7],
//             [7, 1, 7],
//         ],
//     ],
// ];

// // chuyển canvas sang dạng 2d
// const canvas = document.getElementById('board');
// const ctx = canvas.getContext('2d');
// ctx.canvas.width = cols * blockSize;
// ctx.canvas.height = rows * blockSize;


// // function constructor vẽ ra các ô nhỏ trong bảng
// class Board {
//     constructor(ctx) {
//         this.ctx = ctx
//         this.grid = this.genneral()
//         this.score = 0
//         this.gameOver = false
//         this.isPlaying = false
//     }
//     reset() {
//         this.score = 0;
//         this.gameOver = false;
//         this.grid = this.genneral()
//         this.drawboard()
//     }

//     // hàm tạo mảng chửa số lượng hàng và cột
//     genneral() {
//         return Array.from({ length: rows }, () => Array(cols).fill(colorWhite_id))
//     }
//     // hàm vẽ ô
//     drawshell(xAsix, yAsix, colorId) {
//         this.ctx.fillStyle = color[colorId] || color[colorWhite_id]
//         this.ctx.fillRect(xAsix * blockSize, yAsix * blockSize, blockSize, blockSize)
//         this.ctx.fillStyle = 'black'
//         this.ctx.strokeRect(xAsix * blockSize, yAsix * blockSize, blockSize, blockSize)
//     }
//     //hàm vẽ toàn bộ ô trong bảng
//     drawboard() {
//         for (let row = 0; row < this.grid.length; row++) {
//             for (let col = 0; col < this.grid[0].length; col++) {
//                 this.drawshell(col, row, this.grid[row][col])
//             }
//         }
//     }

//     // hàm xử lý khi 1 hàng được lấp đầy
//     handleCompelete() {
//         const unfinishedRow = this.grid.filter((row) => {
//             return row.some((col) => {
//                 return col === colorWhite_id
//             })
//         })
//         const newScore = rows - unfinishedRow.length // từ số lượng hàng hoàn thành tính ra số điểm
//         // tạo ra hàng mới
//         const newRows = Array.from({ length: newScore }, () => Array(cols).fill(colorWhite_id))
//         if (newScore) {
//             this.handleScore(newScore * 10)
//             //đưa hàng mới tạo lại lên đầu mảng
//             this.grid = [...newRows, ...unfinishedRow]
//         }

//     }

//     // hàm xử lý cộng điểm
//     handleScore(newScore) {
//         this.score += newScore
//         document.getElementById('score').innerHTML = this.score
//     }

//     handleGameOver() {
//         this.gameOver = true
//         alert('end game')
//     }
// }

// // function constructor tạo nên các khối gạch 
// class Brick {
//     constructor(id) {
//         this.id = id
//         this.layout = brickLayout[id]; // layout khối ghạch
//         this.activeIndex = 0; // chỉnh các dạng của khối ghạch
//         this.colPos = 3;
//         this.rowPos = -2;

//     }
//     // hàm vẽ khối ghạch
//     draw() {
//         for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
//             for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
//                 if (this.layout[this.activeIndex][row][col] !== colorWhite_id) {
//                     board.drawshell(col + this.colPos, row + this.rowPos, this.id)
//                 }
//             }
//         }
//     }

//     // hàm xoá khối ghạch
//     clear() {
//         for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
//             for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
//                 if (this.layout[this.activeIndex][row][col] !== colorWhite_id) {
//                     board.drawshell(col + this.colPos, row + this.rowPos, colorWhite_id)
//                 }
//             }
//         }
//     }
//     // hàm di chuyển khối ghạch sang trái
//     moveLeft() {
//         if (!this.checkCollission(this.rowPos, this.colPos - 1, this.layout[this.activeIndex])) {
//             this.clear()
//             this.colPos--
//             this.draw()
//         }
//     }

//     // hàm di chuyển khối ghạch sang phải
//     moveRight() {
//         if (!this.checkCollission(this.rowPos, this.colPos + 1, this.layout[this.activeIndex])) {
//             this.clear()
//             this.colPos++
//             this.draw()
//         }
//     }

//     // hàm di chuyển khối ghạch xuống dưới
//     moveDown() {
//         if (!this.checkCollission(this.rowPos + 1, this.colPos, this.layout[this.activeIndex])) {
//             this.clear()
//             this.rowPos++
//             this.draw()

//             return;
//         }

//         this.handlelanded()
//         generateNewbrick()
//     }

//     // hàm xoay khối ghạch
//     moveUp() {
//         if (!this.checkCollission(this.rowPos, this.colPos, this.layout[(this.activeIndex + 1) % 4])) {
//             this.clear()
//             this.activeIndex = (this.activeIndex + 1) % 4
//             this.draw()
//         }
//     }


//     // hàm kiểm tra xem khối ghạch đã chạm đáy hoặc hai bên chưa
//     checkCollission(nextRow, nextCol, active) {
//         for (let row = 0; row < active.length; row++) { //3
//             for (let col = 0; col < active[0].length; col++) {
//                 if (active[row][col] !== colorWhite_id && nextRow >= 0) {
//                     if ((col + nextCol < 0) || (col + nextCol >= cols) || (row + nextRow >= rows) || (board.grid[row + nextRow][col + nextCol] !== colorWhite_id)) {
//                         return true
//                     }
//                 }
//             }
//         }
//     }

//     // hàm xử lý khi khối ghạch chạm đáy

//     handlelanded() {
//         if (this.rowPos <= 0) {
//             board.handleGameOver()
//             return
//         }

//         for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
//             for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
//                 if (this.layout[this.activeIndex][row][col] !== colorWhite_id) {
//                     board.grid[row + this.rowPos][col + this.colPos] = this.id
//                 }
//             }
//         }
//         // vẽ lại
//         board.handleCompelete()
//         board.drawboard()

//     }


// }

// //hàm thay đổi  ID thành số ngẫu nhiên để khối ghạch xuất hiện ngẫu nhiên
// function generateNewbrick() {
//     birck = new Brick(Math.floor(Math.random() * brickLayout.length))
// }


// const board = new Board(ctx)
// console.log(board);
// board.drawboard()
// generateNewbrick()
// birck.draw()

// // event click vào nút play 
// document.getElementById('play').addEventListener('click', () => {
//     board.reset()
//     board.isPlaying = true;
//     generateNewbrick()

//     // hàm các khối ghạch tự động chạy
//     var refest = setInterval(() => {
//         if (!board.gameOver) {
//             birck.moveDown()
//         } else {
//             clearInterval(refest)
//         }
//     }, 1000)

// })



// // xử lý event các nút mũi tên
// document.addEventListener('keydown', (e) => {
//     if (!board.gameOver && board.isPlaying) {
//         switch (e.code) {
//             case keyCode.left:
//                 birck.moveLeft();
//                 break;
//             case keyCode.right:
//                 birck.moveRight();
//                 break;
//             case keyCode.down:
//                 birck.moveDown();
//                 break;
//             case keyCode.up:
//                 birck.moveUp();
//                 break;
//             default:
//                 break;
//         }
//     }
// })