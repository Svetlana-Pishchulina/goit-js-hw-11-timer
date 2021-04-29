// import './styles.css';

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

// ;
const daysEl = document.querySelector('span[data-value="days"]');
const hoursEl = document.querySelector('span[data-value="hours"]');
const minsEl = document.querySelector('span[data-value="mins"]');
const secsEl = document.querySelector('span[data-value="secs"]');

// function timetime() {
//   const targetDate = new Date('Jul 17, 2021');
//   const targetDateUnix = Date.parse(targetDate);
//   console.log(targetDateUnix);
//   setInterval(() => {
//     const currentTime = Date.now();
//     const time = targetDateUnix - currentTime;
//     const days = pad3(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad2(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//     const mins = pad2(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad2(Math.floor((time % (1000 * 60)) / 1000));
//     console.log(`${days}:${hours}:${mins}:${secs}`);
//   }, 1000);
// }
// timetime();
// function getTimeComponents(time) {
//   const days = Math.floor(time / (1000 * 60 * 60 * 24));
//   const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//   const secs = Math.floor((time % (1000 * 60)) / 1000);
// }

// ___________________________________________
// function pad2(value) {
//   return String(value).padStart(2, '0');
// }
// function pad3(value) {
//   return String(value).padStart(3, '0');
// }

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.selector = selector;
//     this.targetDate = targetDate;
//   }
//   pad2(value) {
//     return String(value).padStart(2, '0');
//   }
//   pad3(value) {
//     return String(value).padStart(3, '0');
//   }
//   //   getTimeComponents(time) {
//   //     const days = pad3(Math.floor(time / (1000 * 60 * 60 * 24)));
//   //     const hours = pad2(
//   //       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//   //     );
//   //     const mins = pad2(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   //     const secs = pad2(Math.floor((time % (1000 * 60)) / 1000));
//   //   }
//   startTimer() {
//     const targetDateUnix = Date.parse(this.targetDate);
//     setInterval(() => {
//       const currentTime = Date.now();
//       const time = targetDateUnix - currentTime;
//       const days = pad3(Math.floor(time / (1000 * 60 * 60 * 24)));
//       const hours = pad2(
//         Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//       );
//       const mins = pad2(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//       const secs = pad2(Math.floor((time % (1000 * 60)) / 1000));
//       //   getTimeComponents(time);
//       console.log(`${days}:${hours}:${mins}:${secs}`);
//     }, 1000);
//   }
// }

// const newDate = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });
// console.log(newDate);
// newDate.startTimer();

// _______________________________________________
// function pad2(value) {
//     return String(value).padStart(2, '0');
//   }
//   function pad3(value) {
//     return String(value).padStart(3, '0');
//   }

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }
  pad2(value) {
    return String(value).padStart(2, '0');
  }
  pad3(value) {
    return String(value).padStart(3, '0');
  }
  getTimeComponents(time) {
    const days = this.pad3(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad2(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad2(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad2(Math.floor((time % (1000 * 60)) / 1000));
    return { days, hours, mins, secs };
  }
  startTimer() {
    const targetDateUnix = Date.parse(this.targetDate);
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDateUnix - currentTime;
      const time = this.getTimeComponents(deltaTime);
      //   console.log(time);
      //   this.selector(time);
      updateClockface(time);
    }, 1000);
  }
}

function updateClockface({ days, hours, mins, secs }) {
  daysEl.textContent = `${days}`;
  hoursEl.textContent = `${hours}`;
  minsEl.textContent = `${mins}`;
  secsEl.textContent = `${secs}`;
}

const newDate = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
console.log(newDate);
newDate.startTimer();
