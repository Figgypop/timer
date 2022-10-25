const alarmTimer = function(arguments) {

  for (let num of arguments) {
    const beepTime = Number(num)
    if (!beepTime || beepTime < 0) {
      continue;
    } 

    setTimeout(function() {
      console.log('beep', beepTime)
      process.stdout.write('\x07')
    }, beepTime * 1000)
    
  }

}

const beepTimes = process.argv.slice(2)

alarmTimer(beepTimes)
