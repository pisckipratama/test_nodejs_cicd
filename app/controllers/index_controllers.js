let data = {
  employees: [
    {
      id: 1,
      first_name: 'Piscki',
      last_name: 'Pratama',
      age: 20,
      domicile: 'Jakarta',
      email: 'pisckipratama@gmail.com',
      position: 'Backend Developer',
    },
    {
      id: 2,
      first_name: 'Eko',
      last_name: 'Prasetyo',
      age: 32,
      domicile: 'Jakarta',
      email: 'eko_prasetyo@gmail.com',
      position: 'Frontend Developer',
    },
  ],
};

exports.getAllData = async (req, res, next) => {
  try {
    res.status(200).json({
      success: true,
      data,
      code: 200,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: null,
      code: 500,
    });
  }
};
