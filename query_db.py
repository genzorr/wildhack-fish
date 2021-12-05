def find_all(db, query, args=()):
    cur = db.execute(query, args)
    rv = cur.fetchall()
    return rv


def find_one(db, query, args=()):
    cur = db.execute(query, args)
    rv = cur.fetchone()
    return rv


def execute(db, query, args=()):
    db.execute(query, args)
    db.commit()
