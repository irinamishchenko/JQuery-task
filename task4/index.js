$(document).ready(function () {
  const inputs = $("input");
  inputs.on("click", handleClick);
  let counter = 0;
  function handleClick() {
    // console.log(event.target.checked);
    ++counter;
    console.log(counter);
    if (counter === 3) {
      inputs.attr("disabled", "true");
    }
  }
});
