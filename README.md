# 作業
1. 讓使用者可以輸入自己的體重及身高，根據算出來的BMI值顯示下列訊息
 ```
BMI = 體重(公斤)/身高(公尺)的平方
BMI ＜ 18.5：過輕
18.5≦BMI＜24：正常
24≦BMI＜27：過重
27≦BMI＜30：輕度肥胖
30≦BMI＜35：中度肥胖
BMI≧35：重度肥胖
 ```
 2. 用^畫出下列圖型
 
 ![聖誕樹圖片]( https://i.imgur.com/MuRyHMF.png)
 
 3. 猜數字遊戲
- 請輸入猜測的數字(1~100)，輸入0離開遊戲 =>50
- 數字太大!
- 請輸入猜測的數字(1~100)，輸入0離開遊戲 =>25
- 數字太大!
- 請輸入猜測的數字(1~100)，輸入0離開遊戲 =>12
- 數字太大!
- 請輸入猜測的數字(1~100)，輸入0離開遊戲 =>6
- 猜中數字 = 6

 ```
let num = Math.random()
console.log(num); //0-1之間的值
console.log(num * 100); //0-1之間的值
//Math.floor() 無條件捨去
let guessNum = Math.floor(num * 100); //取整數
 ```
 
 4. 輸入西元年，判斷是否是閏年
  ```
西元除以400可整除，為閏年。
西元除以4可整除但除以100不可整除，為閏年。
西元除以4不可整除，為平年。
西元除以100可整除但除以400不可整除，為平年
  ```

5. 請畫出九九乘法表
 ![久久乘法表](https://imgur.com/GajW3ud.png)

6. 以上的作業請改用 function 來完成
7. 請設計一個 function，傳入攝氏溫度可以轉成華氏溫度，傳入華氏溫度可以轉成攝氏的問溫度