# User API with Pagination & Expense SQL

โปรเจกต์นี้เป็นตัวอย่างการเขียน **REST API ด้วย Node.js (Express)**  
และ **SQL สำหรับดึงยอดเบิกจ่ายรวมรายเดือนของปีงบประมาณหนึ่งปี**

---

## 🛠 Tech Stack
- Node.js
- Express.js
- MySQL 8.x
- Git / GitHub

---

## Project Structure
user-api/
├── index.js
├── package.json
├── package-lock.json
├── database/
│ └── expense.sql
└── README.md

---

## How to Run Project

```bash
npm install
npm start
Server will run at: http://localhost:3000

---

## Example Requests
GET /users
GET /users?page=2
GET /users?search=Ja
GET /users?search=Ja&page=1&limit=2

## Example Response
{
  "page": 1,
  "limit": 2,
  "total": 3,
  "totalPage": 2,
  "hasNext": true,
  "data": [
    {
      "id": 1,
      "name": "Jay",
      "phone": "0990190339"
    }
  ]
}

## Database Setup
database/expense.sql

## Run SQL Script (MySQL Shell)
\connect root@localhost
\sql
SOURCE D:/user-api/database/expense.sql;

## ตัวอย่าง SQL สำหรับดึง ยอดเบิกจ่ายรวมรายเดือนของปีงบประมาณ
SELECT
  DATE_FORMAT(expense_date, '%Y-%m') AS month,
  SUM(amount) AS total_amount
FROM expenses
WHERE expense_date BETWEEN '2024-10-01' AND '2025-09-30'
GROUP BY DATE_FORMAT(expense_date, '%Y-%m')
ORDER BY month;

## Result 
| month   | total_amount |
| ------- | ------------ |
| 2024-10 | 3200         |
| 2024-11 | 1800         |
| 2024-12 | 2500         |
| 2025-01 | 4000         |
