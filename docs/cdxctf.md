## 第五題：
下載他給你的檔案，選擇記事本打開檔案內的資料，在搜尋的地方打上”ctfcdx”的關鍵字即可找到flag。

註:找不到當時的檔案


## 第十一題：
port號:8080

首先:標題是關於cookie，所以右鍵點擊檢查到Application的cookie的部分會找到一個寫說”discustion的詞，將它改為”yummy”就可以看到”Y3RmY2R4e2MwMGtpZV8xc195QG1teX0=”。

最後Form Base64解碼即可得到flag。

![第十一題 Cookie 操作](/images/q11-cookie.png)

Flag : ctfcdx{c00kie_1s_y@mmy}


## 第十二題：
port號:54321

題示是一台機器人，看到機器人的時候就要想到”robots.txt”在url的後方輸入之後，他會給你一個頁面，在url把剛剛robots.txt的部分替換成secret-path就可以抵達flag所在頁面。

```jsx
頁面上的文字:
User-agent: cdxuser
Disallow: /secret-path
```

接著可以使用OWASP，將網址複製送出之後在底下輸入robots給你的”User-agent: cdxuser”再輸入文字的地方，按下送出後點開他的虛擬網站即可看到flag。

![第十二題 robots.txt 頁面](/images/q12-robots.png)


Flag : ctfcdx{r0b0ts_@r3_n0t_s3cr3t!}


## 第十四題：
port號:5000

這題當中有一個被隱藏起來的網頁，但在這網頁當中是假的flag，

![第十四題 假密碼](/images/q14-fake.png)

他總共有1-8的post是有東西的，當輸入post/0的時候，出現的是404，但post/-1則是not found，所以可以嘗試先從9-1000內的全部post來做窮舉法。
 
![第十四題 窮舉法](/images/q14-bruteforce.png)

Flag : ctfcdx{h1dd3n_p0st_d3t3ct3d}


## 第十五題：
port號:8888

在頁面當中點擊右鍵檢查，在頁面當中可以看到有<--->這樣的字體，總共被分成了三段，只要找到全部的段落即可拼湊成完整的flag。

![第十五題 註解中的 Flag](/images/q15-comments.png)

Flag : ctfcdx{0p3n_p0rt5_r3v34l_s3rv1c3s}


## 第十六題：
看到提示的時候可以知道說他不只有轉base64，所以應該除了64以外還有其他的

再轉第一次64的時候你會看到當中有一個(32)，所以下一層需要轉成32，直到最後就可以看到flag

可以使用這個網站”https://www.dcode.fr/base92-encoding”

![第十六題 Base 系列解碼](/images/q16-base-decode.png)

Flag : ctfcdx{b@se64_1s_n0t_@lways_th3_flag}


## 第十九、二十題：
這兩題的性質是一樣的，透過與AI溝通，一步步的讓AI說出flag
但是要避免提起相關詞條，例如說:flag、密碼，可以透過閒聊的方式進行

![第十九題 AI 詠唱](/images/q20-ai-prompt.png)

Flag :  ctfcdx{th3_tr34sur3_1s_h3r3}

![第二十題 AI 詠唱](/images/q20-ai-prompt.png)

Flag :  ctfcdx{th3_tr34sur3_1s_h3r3}

