let doWork = function (job, timer) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`完成工作 ${job}`);
      }, timer);
    });
  };
  
  // 刷牙 --> 吃早餐 --> 寫功課
  let dt = new Date();
  console.log(`Start ${dt.toISOString()}`);


  //IIFE 定義完馬上就執行 只用一次通常不用取名字
  // (function(){})()
  // 簡寫(function()=>{})();

  async function main(){

      let result1 = await doWork("刷牙", 2000);
      let dt = new Date();
      console.log(`${result1} at ${dt.toISOString()}`);

       //await 是一種暫停鍵：暫停到有結果再回傳 回傳放到result1變數裡 

      let result2 = await doWork("吃早餐", 3000);
      let dt = new Date();
      console.log(`${result2} at ${dt.toISOString()}`);

      let result3 = await doWork("寫功課", 2000);
      let dt = new Date();
      console.log(`${result3} at ${dt.toISOString()}`);
  }

// ; 包在async裏面限制暫停的範圍 只暫停函式而不是整個thread本身
// ; javascript的特別功能 
// ; 處理到一半可以暫停不用return: non-blocking非阻塞: 不會阻塞進度
// ; 暫停的範圍是整個async 而非只有await後面



//await 是因為大家覺得Promise過好看
//希望可以更像「同步」的程式
// 所以有 await/ async
//是Promsie的語法糖
//-> 1. 還是要有promise
//-> 2. 看到liberary說自己是Promise-based，那90%可以用
