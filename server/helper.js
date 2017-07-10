export default (data) => {
  let title = data.split('<TITLE>')[1];
  title = title.slice(0, title.indexOf('<'));
  const cache = {};
  const array = data.split('<SPEAKER>').slice(1);
  array.reduce((acc, str) => {
    const current = str.slice(0, str.indexOf('</SPEAKER>'));
    let name;
    if (acc) {
      name = [current, ...acc];
    } else {
      name = [current];
    }
    if (!str.includes('<LINE>')) {
      return name;
    }
    name.forEach((speaker) => {
      if (typeof speaker === 'string' && speaker.toUpperCase() !== 'ALL') {
        cache[speaker] = cache[speaker] || 0;
        cache[speaker] += str.split('<LINE>').length - 1;
      }
    });
    return 0;
  }, 0);
  return {
    title,
    data: {
      labels: Object.keys(cache),
      datasets: [{
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: Object.values(cache),
      }],
    },
  };
};
