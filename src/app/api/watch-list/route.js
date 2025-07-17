const watchList = [
  {
    id: 1,
    anime: "Naruto",
  },
  {
    id: 2,
    anime: "One Piece",
  },
];

export async function GET(request) {
  return new Response(
    JSON.stringify({
      message: "Data berhasil diambil",
      data: watchList,
    }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
export async function POST(request) {
  const data = await request.json();

  watchList.push({
    id: watchList.length + 1,
    anime: data.anime,
  });

  return new Response(
    JSON.stringify({
      message: "Data berhasil ditambahkan",
      data: watchList,
    }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}

export async function PUT(request) {
  const data = await request.json();

  const index = watchList.findIndex((anime) => anime.id == data.id);

  if (index === -1) {
    return new Response(
      JSON.stringify({
        message: "Data tidak ditemukan",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  watchList[index].anime = data.anime;

  return new Response(
    JSON.stringify({
      message: "Data berhasil diubah",
      data: watchList,
    }),
    {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
export async function DELETE(request) {
  const data = await request.json();

  const index = watchList.findIndex((anime) => anime.id == data.id);

  if (index === -1) {
    return new Response(
      JSON.stringify({
        message: "Data tidak ditemukan",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  watchList.splice(index, 1)

  return new Response(
    JSON.stringify({
      message: "Data berhasil dihapus",
      data: watchList,
    })
  );
}
