CREATE TABLE messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT
);

INSERT INTO messages(content) VALUES
 ('Test-meddelande');

 SELECT * FROM messages;