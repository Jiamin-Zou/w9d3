import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    this.handleClick = this.handleClick.bind(this);
    this.toggleButton.addEventListener("click", this.handleClick)
  }

  async handleClick(event) {
    // Your code here
    event.preventDefault();
    // console.log(this.followState);
    // debugger
    this.followState === "followed" ? this.unfollow() : this.follow();
    // console.log(this.followState);
    // debugger
  }

  async follow() {
    // Your code here
    this.toggleButton.innerText = "Unfollow!";
    this.followState = "followed";
  }

  async unfollow() {
    // Your code here
    this.toggleButton.innerText = "Follow!";
    this.followState = "unfollowed";
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}