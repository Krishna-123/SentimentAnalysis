import time
import classify_text as ct
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse

HOST_NAME = 'localhost'
PORT_NUMBER = 9000


class MyHandler(BaseHTTPRequestHandler):

    category = None
    def do_GET(self):
      
        query = urlparse(self.path).query
        query_components = dict(qc.split("=") for qc in query.split("&"))
        sentence_category = query_components["sentence"]
        sentence_category = sentence_category.replace("%20", " ")
        self.category = ct.get_sentence(sentence_category)
     
        print ("category :- " + self.category)

        self.respond({'status': 200})
        

    def handle_http(self, status_code, path):
        self.send_response(status_code)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        content = '''
        <html><head><title>Title goes here.</title></head>
        <body><p>This is a test.</p>
        <p>You accessed path: {}</p>
        </body></html>
        '''.format(self.category)
        return bytes(content, 'UTF-8')

    def respond(self, opts):
        response = self.handle_http(opts['status'], self.path)
        self.wfile.write(response)


if __name__ == '__main__':
    server_class = HTTPServer
    httpd = server_class((HOST_NAME, PORT_NUMBER), MyHandler)
    print(time.asctime(), 'Server Starts - %s:%s' % (HOST_NAME, PORT_NUMBER))
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass
    httpd.server_close()
    print(time.asctime(), 'Server Stops - %s:%s' % (HOST_NAME, PORT_NUMBER))