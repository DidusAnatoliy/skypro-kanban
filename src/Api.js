

export async function getTodos({ token }) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  return data;
}

export async function registerUser({ name, login, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      name,
      login,
      password,
    }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }
  const data = await response.json();
  return data;
}

export async function loginUser({ login, password }) {
  const response = await fetch("https://wedev-api.sky.pro/api/user/login", {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
  })
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error);
  }
  const data = await response.json();
  return data;
}

export async function postTodos({ title, topic, description, date, token }) {
  const response = await fetch("https://wedev-api.sky.pro/api/kanban", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      title,
      topic,
      description,
      date,
    })
  })
  if (!response.ok) {
    throw new Error("Заполните все поля");
  } else if (response.status === 500) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}