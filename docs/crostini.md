# Chrome OS 上的 Linux
## (一)、 crostini 原理
Crostini 是一種在 Chrome OS 系統中實現 Linux 應用的一種方式，它利用容器虛擬機器技術，在一個獨立的 Linux 容器中運作，讓使用者可以在 Chromebook 上安裝並使用原本只能在 Linux 系統上執行的軟體。
## (二)、 crostini 使用步驟
**步驟一：前往「設定」**
點擊右下角的狀態區（時間那裡），然後點擊齒輪圖示進入「設定」。

**步驟二：找到「開發人員」選項**
在設定頁面的左側選單中，滑到下方找到並點擊「開發人員」。

**步驟三：開啟 Linux 開發環境**
看到「Linux 開發環境」的選項，點擊右邊的「啟用」按鈕。

**步驟四：設定您的 Linux 環境(可跳過)**
系統會跳出一個設定精靈。你可以自訂使用者名稱和分配給 Linux 的磁碟空間大小（如果之後不夠用，可以再來調整）。對於初次使用的玩家，直接使用預設值按「安裝」即可。

**步驟五：等待安裝**
Chrome OS 會開始下載並設定你的 Linux 環境，這個過程需要幾分鐘。安裝完成後，會自動打開終端機，打開後即可使用。

看到這個畫面，就代表你成功安裝了!
![Screenshot 2025-08-10 19.49.32](https://hackmd.io/_uploads/B1SedW8Oxe.png)
## (三)、 Ubuntu (22.04版)安裝步驟
由於預設並非我們所需要的，所以接下來的步驟要做好。
1.  **切換地區：**
    按下ctrl + alt + t ，切換到crosh，才能夠使用我們需要的指令。
2.  **啟用 lxc 指令支援 (如果尚未啟用)：**
    打開終端機，執行以下指令來啟用進階的容器管理功能。

    ```bash
    vmc start termina
    ```
    執行後，提示符會從` (penguin)$` 變為 `(termina)$`，代表你  已經從預設的 Debian 容器「跳到」了上一層的 Termina VM 中。


3.  **建立並啟動新的 Ubuntu 22.04 容器：**
    這一步是關鍵。告訴 `lxc` 從 `images` 伺服器下載 Ubuntu 22.04 的映像檔，並建立一個名為 `my-ubuntu` 的新容器。

    ```bash
    lxc launch Ubuntu:22.04 my-ubuntu
    ```

4.  **進入容器：**
    容器建立好之後，我們需要進入其中。

    ```bash
    lxc exec my-ubuntu -- /bin/bash
    ```
    

5.  **更新：**
    更新可用軟體的清單，然後自動將系統上所有已安裝的程式全部升級到最新版本。

    ```bash
    apt update && apt upgrade -y
    ```

    根據提示設定密碼和使用者資訊。

6.  **驗證 Python 版本：**
    如果螢幕顯示 Python 3.10.x，就代表我們已成功達成目標
    ```bash
    python3 --version
    ```
    這樣屬於你自己的ubuntu就安裝完成了!

## (四)、 VIM 中的 line number
1.  ** 編輯設定檔：**
    將設定寫入 Vim 的設定檔 .vimrc 中。
    ```bash
    vim ~/.vimrc
    ```


2.  ** 寫入設定：**
    按`i`進入插入模式後輸入以下這段文字並儲存退出。
    ```bash
    set number
    ```
    退出插入模式後輸入`:wq`並按下 Enter 即可完成
    
## (五)、如何在一般使用者下開啟並使用 gedit 介面
1.  回到penguin容器中
    
    
2.  **安裝 gedit 桌面環境：**
    一行指令搞定。`-y` 參數會自動回答安裝過程中的所有「yes/no」問題。

    ```bash
    sudo apt install gedit -y
    ```


3.  **啟動 gedit 工作階段：**
    安裝完成後，輸入以下指令來啟動 gedit。

    ```bash
    gedit
    ```
所有步驟都完成啦!現在開始屬於你的 Linux 旅吧!