// MENU

class App {
  init() {
    this.initLog();
  }

  initLog() {
    const log = () => {
      console.log('log')
    }

    log();
  }
}

const app = new App();
document.addEventListener('DOMContentLoaded', app.init());
