function handleEvent(event) {
  return {
    body: `<html><head><title>${process.env.TITLE}</title></head><body><h1>${process.env.TITLE}</h1></body></html>`,
    statusCode: 200,
    headers: {
      ...headers,
      'Content-Type': 'text/html',
    },
  };
}