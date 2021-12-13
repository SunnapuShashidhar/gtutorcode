from flask import Flask,request,session
from flask_cors import CORS
import datetime
import logging
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re

app = Flask(__name__)
CORS(app)

app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='Sunnapu@45'
app.config['MYSQL_DB']='myportfolio'
app.config['autocommite']=True
mysql =MySQL(app)

 
@app.route('/register',methods=["POST","GET"])
def registerUser():
    try:
         cur=mysql.connection.cursor()
         account=request.json
         query = "INSERT INTO register VALUES(%s,%s,%s,%s);"
         cur.execute(query, [account["id"],account["email"],account["name"],account["password"]])
         cur.close()
         return{"isSuccessful":True}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful":False}
@app.route("/addc",methods=["POST","GET"])
def add_c():
     try:
        id=request.form['id']
        imageUrl=request.form['imageUrl']
        title=request.form["title"]
        excerpt=request.form["excerpt"]
        body=request.form["body"]
        cursor=mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        project=request.json
        cursor.execute(
             "INSERT INTO projects VALUES(%s, %s, %s, %s, %s, %s, %s);",
            [project[id],project[imageUrl],project[title],project[excerpt],project[body],True,datetime.datetime.now()]
        )
        cursor.close()
        return {"isSuccessful": True}
     except Exception as e:
        logging.error(e)
        return {"isSuccessful": False}
@app.route("/login",methods=["POST","GET"])
def login():
    try:
        msg=""
        account=request.form
        if 'email' in account and 'password' in account:
                msg='loggedin successsfully!'
                return {"isSuccessful":True,"msg":msg}
        else:
            msg='Incorrect password or email'
            return {"isSuccessful":False}
        
    except Exception as e:
        logging.error(e)
        return {"isSuccessful":False}

@app.route("/api/c",methods=["GET"])
def ccs():
    try:
        cur=mysql.connection.cursor()
        # SQL query
        query = "SELECT * FROM c WHERE isPublished=True ORDER BY lastModified DESC;"

        # Fetch the data
        cur.execute(query)
        c =cur.fetchall()

        # Process the data
        results = []
        for cs in c:
            cs_obj = {
                "id": cs[0],
                "imageUrl": cs[1],
                "title": cs[2],
                "excerpt": cs[3],
                "body":cs[4],
            }
            results.append(cs_obj)
            cur.close()
            mysql.connection.close()
        return {"isSuccessful":True,"result":results}

    except Exception as e:
        logging.error(e)
        return {"isSuccessful":False}

@app.route("/api/cpp", methods=["GET"])
def get_cpp():
    try: 
        cur=mysql.connection.cursor()
    
        query = "SELECT * FROM cpp WHERE isPublished=True;"
        cur.execute(query)
        
        cpps = cur.fetchall()
        results = []
        for cpp in cpps:
            project_obj = {
                "id": cpp[0],
                "imageUrl":cpp[1],
                "title": cpp[2],
                "excerpt": cpp[3],
                "body":cpp[4],
            }
            results.append(project_obj)
            print(results)
        cur.close()
        return {"isSuccessful": True,"results":results}
    except Exception as e:
        logging.error(e)
        return {"isSuccessful": False, "results": []}




@app.route("/cpp",methods=["GET"])
def cpp_by_id():
    try:
         cur=mysql.connection.cursor()
         id=request.args.get("id")
         query = "SELECT id, imageUrl, title, body FROM cpp WHERE id=%s;"
         cpp=cur.execute(query,[id])
         cpp_obj={
             "imageUrl":cpp[0],
             "title":cpp[1],
             "body":cpp[2]
         }
         cur.close()
         return {"isSuccessful":True,"result":cpp_obj}
    except:
        return {"isSuccessful":False}
