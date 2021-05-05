import './styles.css';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;

    this.daysEl = document.querySelector(`${selector} span[data-value="days"]`);
    this.hoursEl = document.querySelector(
      `${selector} span[data-value="hours"]`,
    );
    this.minsEl = document.querySelector(`${selector} span[data-value="mins"]`);
    this.secsEl = document.querySelector(`${selector} span[data-value="secs"]`);
  }

  pad2(value) {
    return String(value).padStart(2, '0');
  }
  pad3(value) {
    return String(value).padStart(3, '0');
  }

  startTimer() {
    const targetDateUnix = Date.parse(this.targetDate);
    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = targetDateUnix - currentTime;
      const time = this.getTimeComponents(deltaTime);
      this.updateClockface(time);
    }, 1000);
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
  updateClockface({ days, hours, mins, secs }) {
    this.daysEl.textContent = `${days}`;
    this.hoursEl.textContent = `${hours}`;
    this.minsEl.textContent = `${mins}`;
    this.secsEl.textContent = `${secs}`;
  }
}

const newDate = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2021'),
});
newDate.startTimer();
// console.log(newDate);
