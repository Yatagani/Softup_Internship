
export const handler = async (event:any, context: any) => {
  console.log('event:', JSON.stringify(event, null, 2));
  console.log('context', JSON.stringify(context, null, 2));

  return sendRes(200, 'Goodbye World');
}

const sendRes = (status:number, body:string) => {
  var response = {
    statusCode: status,
    headers: {
      "Content-Type": "text/html"
    },
    body: body
  };
  return response;
};