const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

// for文の場合
for (let i = 0; i < holidays.length * 2; i++) {
  console.log(holidays[i % holidays.length]) ;
}

// while文の場合
let j = 0;
while (j < holidays.length * 2) {
    console.log(holidays[j % holidays.length]);
    j++;
  }