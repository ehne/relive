export default (animName) => {
  fetch(`/sse/toggle/${animName}`)
    .then((res) => {console.log(res)});
};
