const getRoom = async (id) => {
  const res = await fetch(`/rooms/${id}`);

  if (!res.ok) {
    throw new Error("room not found");
  }

  const data = await res.json();

  return data;
};

export { getRoom };
