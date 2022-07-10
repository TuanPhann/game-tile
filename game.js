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

const cols = 10;
const rows = 20;
const blockSize = 30;
const color = [
    'red',
    'orange',
    'green',
    'purple',
    'blue',
    'cyan',
    'yellow',
    'white',
]

const brickLayout = [
    [
        [
            [1, 7, 7],
            [1, 1, 1],
            [7, 7, 7],
        ],
        [
            [7, 1, 1],
            [7, 1, 7],
            [7, 1, 7],
        ],
        [
            [7, 7, 7],
            [1, 1, 1],
            [7, 7, 1],
        ],
        [
            [7, 1, 7],
            [7, 1, 7],
            [1, 1, 7],
        ],
    ],
    [
        [
            [7, 1, 7],
            [7, 1, 7],
            [7, 1, 1],
        ],
        [
            [7, 7, 7],
            [1, 1, 1],
            [1, 7, 7],
        ],
        [
            [1, 1, 7],
            [7, 1, 7],
            [7, 1, 7],
        ],
        [
            [7, 7, 1],
            [1, 1, 1],
            [7, 7, 7],
        ],
    ],
    [
        [
            [1, 7, 7],
            [1, 1, 7],
            [7, 1, 7],
        ],
        [
            [7, 1, 1],
            [1, 1, 7],
            [7, 7, 7],
        ],
        [
            [7, 1, 7],
            [7, 1, 1],
            [7, 7, 1],
        ],
        [
            [7, 7, 7],
            [7, 1, 1],
            [1, 1, 7],
        ],
    ],
    [
        [
            [7, 1, 7],
            [1, 1, 7],
            [1, 7, 7],
        ],
        [
            [1, 1, 7],
            [7, 1, 1],
            [7, 7, 7],
        ],
        [
            [7, 7, 1],
            [7, 1, 1],
            [7, 1, 7],
        ],
        [
            [7, 7, 7],
            [1, 1, 7],
            [7, 1, 1],
        ],
    ],
    [
        [
            [7, 7, 7, 7],
            [1, 1, 1, 1],
            [7, 7, 7, 7],
            [7, 7, 7, 7],
        ],
        [
            [7, 7, 1, 7],
            [7, 7, 1, 7],
            [7, 7, 1, 7],
            [7, 7, 1, 7],
        ],
        [
            [7, 7, 7, 7],
            [7, 7, 7, 7],
            [1, 1, 1, 1],
            [7, 7, 7, 7],
        ],
        [
            [7, 1, 7, 7],
            [7, 1, 7, 7],
            [7, 1, 7, 7],
            [7, 1, 7, 7],
        ],
    ],
    [
        [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
        ],
        [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
        ],
        [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
        ],
        [
            [7, 7, 7, 7],
            [7, 1, 1, 7],
            [7, 1, 1, 7],
            [7, 7, 7, 7],
        ],
    ],
    [
        [
            [7, 1, 7],
            [1, 1, 1],
            [7, 7, 7],
        ],
        [
            [7, 1, 7],
            [7, 1, 1],
            [7, 1, 7],
        ],
        [
            [7, 7, 7],
            [1, 1, 1],
            [7, 1, 7],
        ],
        [
            [7, 1, 7],
            [1, 1, 7],
            [7, 1, 7],
        ],
    ],
];

const keyCode = {
    left: 37,
    up: 38,
    right: 39,
    down: 40
}


const colorWhite_id = 7;

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
ctx.canvas.width = cols * blockSize;
ctx.canvas.height = rows * blockSize;


class Board {
    constructor(ctx) {
        this.ctx = ctx
        this.grid = this.generalBoar()
        this.score = 0
        this.gameover = false
    }

    reset() {
        this.score = 0
        this.gameover = false
        this.grid = this.generalBoar()
        this.drawBoard()
    }

    generalBoar() {
        return Array.from({ length: rows }, () => Array.from({ length: cols }).fill(colorWhite_id))
    }

    //vẽ 1 ô
    drawshell(xAsix, yAsix, colorId) {
        this.ctx.fillStyle = color[colorId] || color[colorWhite_id]
        this.ctx.fillRect(xAsix * blockSize, yAsix * blockSize, blockSize, blockSize)
        this.ctx.fillStyle = 'black'
        this.ctx.strokeRect(xAsix * blockSize, yAsix * blockSize, blockSize, blockSize)
    }

    // vẽ toàn bộ ô
    drawBoard() {
        for (let row = 0; row < this.grid.length; row++) {
            for (let col = 0; col < this.grid[0].length; col++) {
                this.drawshell(col, row, this.grid[row][col])
            }
        }
    }
    // hàm xử lý khi complete
    handleComplete() {
        const unfinishedRow = this.grid.filter((row) => {
            return row.some((col) => {
                return col === colorWhite_id
            })
        })
        const newScore = rows - unfinishedRow.length
        const newRows = Array.from({ length: newScore }, () => Array.from({ length: cols }).fill(colorWhite_id))
        if (newScore) {
            this.handleScore(newScore * 10)
            this.grid = [...newRows, ...unfinishedRow]
        }
    }

    // xư lý cộng điểm
    handleScore(newScore) {
        this.score += newScore
        document.getElementById('score').innerHTML = this.score
    }

    // xử lý game over
    handleGameover() {
        this.gameover = true
        alert('end game')
    }
}


class Brick {
    constructor(id) {
        this.id = id
        this.layout = brickLayout[id]
        this.activeIndex = 0
        this.colPos = 3
        this.rowPos = -2
    }

    // vẽ ra khối ghạch
    brickBlock() {
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== colorWhite_id) {
                    isboard.drawshell(col + this.colPos, row + this.rowPos, this.id)
                }
            }
        }
    }

    // xoá khối ghạch
    clear() {
        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== colorWhite_id) {
                    isboard.drawshell(col + this.colPos, row + this.rowPos, colorWhite_id)
                }
            }
        }
    }

    // khối ghạch di chuyển sang trái
    moveLeft() {
        if (!this.checkcollission(this.rowPos, this.colPos - 1, this.layout[this.activeIndex])) {
            this.clear()
            this.colPos--
            this.brickBlock()
        }

    }

    // khối ghạch di chuyển sang phải
    moveRight() {
        if (!this.checkcollission(this.rowPos, this.colPos + 1, this.layout[this.activeIndex])) {
            this.clear()
            this.colPos++
            this.brickBlock()
        }
    }

    // khối ghạch di chuyển sang trái
    moveDown() {
        if (!this.checkcollission(this.rowPos + 1, this.colPos, this.layout[this.activeIndex])) {
            this.clear()
            this.rowPos++
            this.brickBlock()

            return;
        }
        this.handleBrick()
        generalNewbrick()
    }

    // khối ghạch chuyển sang hình dạng khác
    moveUp() {
        if (!this.checkcollission(this.rowPos + 1, this.colPos, this.layout[(this.activeIndex + 1) % 4])) {
            this.clear()
            this.activeIndex = (this.activeIndex + 1) % 4
            this.brickBlock()
        }

    }

    // hàm check va chạm
    checkcollission(nextRow, nextCol, active) {
        for (let row = 0; row < active.length; row++) {
            for (let col = 0; col < active[0].length; col++) {
                if (active[row][col] !== colorWhite_id && nextRow >= 0) {
                    if ((nextCol + col < 0) ||
                        (nextCol + col >= cols) ||
                        (nextRow + row >= rows) ||
                        (isboard.grid[row + nextRow][col + nextCol] !== colorWhite_id)) {
                        return true;
                    }
                }
            }
        }
    }

    // hàm  xử lý khối ghạch chạm đáy
    handleBrick() {
        if (this.rowPos <= 0) {
            isboard.handleGameover()
            return
        }

        for (let row = 0; row < this.layout[this.activeIndex].length; row++) {
            for (let col = 0; col < this.layout[this.activeIndex][0].length; col++) {
                if (this.layout[this.activeIndex][row][col] !== colorWhite_id) {
                    isboard.grid[row + this.rowPos][col + this.colPos] = this.id
                }
            }
        }
        isboard.handleComplete()
        isboard.drawBoard()
    }
}

function generalNewbrick() {
    isBrick = new Brick(Math.floor(Math.random() * 4))
}

isboard = new Board(ctx)
isBrick = new Brick(0)
isboard.drawBoard()
isBrick.brickBlock()

// isboard.drawshell(1, 1, 1)
// isboard.generalBoar()

// xử lý khi click vào nút play thì game mới bắt đầu
document.getElementById('play').addEventListener('click', () => {
    isboard.reset()
    generalNewbrick()

    const loop = setInterval(() => {
        if (!isboard.gameover) {
            isBrick.moveDown()
        } else {
            clearInterval(loop)
        }
    }, 300)
})


// xử lý sự kiện ấn nút cho khối ghạch di chuyển
document.onkeydown = function (e) {
    if (!isboard.gameover) {
        switch (e.keyCode) {
            case keyCode.left:
                isBrick.moveLeft()
                break;
            case keyCode.right:
                isBrick.moveRight()
                break;
            case keyCode.down:
                isBrick.moveDown()
                break;
            case keyCode.up:
                isBrick.moveUp()
                break;
            default:
                break;
        }
    }

}