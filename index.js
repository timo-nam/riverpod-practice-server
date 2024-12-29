import express, { json } from 'express';

const app = express();
const port = 3000;

const memoryDb = [
  { description: "Learn Flutter", completed: true },
  { description: "홋카이도 비행편 예약", completed: true },
  { description: "엔화 환전", completed: true },
  { description: "Learn Riverpod", completed: false },
  { description: "Spring 복습", completed: false },
  { description: "커리어 코칭", completed: false },
  { description: "마케팅 강의", completed: false },
];

// 고의 지연
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

app.use(json());

app.get('/todos', async (req, res) => {
  await delay(500); // 0.5초 지연
  console.log(`To Do List 보내드려요~`);
  res.json(memoryDb);
});

app.post('/todos', async (req, res) => {
  const newTodo = req.body;

  await delay(1000); // 1초 지연
  memoryDb.push(newTodo);

  console.log(`"${newTodo.description}" 추가 완료`);
  res.status(201).json(memoryDb);
});

app.listen(port, () => {
  console.log(`Server is running on http://127.0.0.1:${port}`);
});
