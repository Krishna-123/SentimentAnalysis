import time
import classify_text as ct
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import urlparse
import json
from signal import signal, SIGPIPE, SIG_DFL

HOST_NAME = 'localhost'
PORT_NUMBER = 3002


class MyHandler(BaseHTTPRequestHandler):

    category = None
    def do_POST(self):
      
        # query = urlparse(self.path).query
        # query_components = dict(qc.split("=") for qc in query.split("&"))
        # body = urlparse(self.path).body
        # sentence_category = body.review
        content_len = int(self.headers.get('content-length', 0))
        body = self.rfile.read(content_len)
        
        # sentence_category = sentence_category.replace("%20", " ")
        body = body.decode('utf8')
        body = body.replace("+", " ")
        body_post = dict(qc.split("=") for qc in body.split("&"))
        review = body_post['reviewText']
        print (review)
        self.category = ct.get_sentence(review)
        # self.category = "testing"
        self.respond({'category': self.category})
        

   
    def respond(self, opts):
        # print("self" + self);
        self.send_response(200)
        self.send_header('Content-Type', 'application/json')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        # category = self.category
        content = "{\"category\": \"%s\"}"%self.category ;
        print ("content" + content);
        res = bytes(content, 'UTF-8')
        try:
            self.wfile.write(res)
        except:
            signal(SIGPIPE,SIG_DFL)
            pass   


if __name__ == '__main__':
    server_class = HTTPServer
    httpd = server_class((HOST_NAME, PORT_NUMBER), MyHandler)
    print(time.asctime(), 'Server Starts - %s:%s' % (HOST_NAME, PORT_NUMBER))
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        httpd.server_close()
        pass
    print(time.asctime(), 'Server Stops - %s:%s' % (HOST_NAME, PORT_NUMBER))


