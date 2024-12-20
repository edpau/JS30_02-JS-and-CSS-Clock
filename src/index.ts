const secondHand = document.querySelector<HTMLElement>(".second-hand");
const minHand = document.querySelector<HTMLElement>(".min-hand");
const hourHand = document.querySelector<HTMLElement>(".hour-hand");

const OFFSET_DEGREES = 90;

// Function to set the rotation of the clock hands
function setDate(hands: {
  secondHand: HTMLElement;
  minHand: HTMLElement;
  hourHand: HTMLElement;
}) {
  const now = new Date();

  // Calculate degrees for each hand
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360 + OFFSET_DEGREES) % 360;

  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360 + OFFSET_DEGREES) % 360;

  const hours = now.getHours();
  const hoursDegrees = (((hours % 12) / 12) * 360 + OFFSET_DEGREES) % 360;

  // Apply rotations
  hands.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  hands.minHand.style.transform = `rotate(${minsDegrees}deg)`;
  hands.hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

if (secondHand && minHand && hourHand) {
  const hands = { secondHand, minHand, hourHand };

  // Initial call to avoid waiting 1 second before the first update
  setDate(hands);

  // Update every second
  setInterval(() => {
    setDate(hands);
  }, 1000);
} else {
  console.error("One or more clock hand elements were not found.");
}
