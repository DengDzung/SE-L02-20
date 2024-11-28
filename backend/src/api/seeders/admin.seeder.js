const Admin = require("../models/admin.model")
const seedAdmins = async () => {
  try {
    const admins = [
      {
        adminName:req.body.name,
        email:req.body.email,
        passwd:req.body.passwd,
        campusName:req.body.campus,
        building:req.body.building,
        roomNumber:req.body.room,
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ];

    await Admin.bulkCreate(students, { validate: true });

    console.log('Student seeding completed!');
  } catch (err) {
    console.error('Error while seeding students:', err);
  }
};

module.exports = seedAdmins