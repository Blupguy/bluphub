const track = document.getElementById("Image-Track");

  window.onmousedown = e => {
    track.dataset.mouseDownAt = e.clientX;
  }
  window.onmousemove = e => {
    if (track.dataset.mouseDownAt === "0") return;

    const mouseDelta = parseFloat(track.dataset.MouseDownAt) - e.clientX,
          maxDelta = window.innerWidth / 2;
    const percentage = (mouseDelta / maxDelta) * -100;

    track.style.transform = 'translate(${percentage}%, 50%)';
  }
  window.onmouseup = () => {
    track.dataset.mouseDownAt = "0";
  }
