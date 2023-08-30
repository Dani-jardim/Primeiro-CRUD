const TechMaromba = require("../models/TechMaromba")
const { response } = require("../app");

const findAll = async (request, response) => {
  try {
    const techMarombaList = await TechMaromba.find()
  response.status(200).json(techMarombaList)
  } catch (error) {
    console.error(error)
    response.status(500).json({
      message:error.message
    })
  }
}
const addNew = async (request,response) => {
  try {
    const {
      name,
      description,
      urlProfile,
      urlImage,
    } = request.body

    const techMarombaCreated = new TechMaromba({
      name,
      description,
      urlProfile,
      urlImage,
      createdAt: new Date()
    })
    const result = await techMarombaCreated.save()
    response.status(201).json({TechMaromba: result})
  } catch (error) {
    console.error(error)
    response.status(500).json({
      message:error.message  
    })
  }
}

const update = async (request, response) => {
  try {
    const techMarombaFound = await TechMaromba.findById({_id: request.params.id})

    if(request.body.name){
      techMarombaFound.name = request.body.name
    }
    if(request.body.description){
      techMarombaFound.description = request.body.description
    }
    if(request.body.urlProfile){
      techMarombaFound.urlProfile = request.body.urlProfile
    }
    if(request.body.urlImage){
      techMarombaFound.urlImage = request.body.urlImage
    }
    const techMarombaUpdated = await techMarombaFound.save()
    response.status(200).json(techMarombaUpdated)
  } catch (error) {
    console.error(error)
    response.status(500).json({
      message: "nao foi possivel atualizar, tente novamente!"
    })
  }
}
const clear = async (request, response) =>  {
  try {
    const { id } = request.params
     await TechMaromba.findyByIdAndDelete(id)

    response.status(200).json({message: `${id} foi deletada`})
  } catch (error) {
    console.error(error)
    response.status(500).json({message: error.message})
  }
}

module.exports = {
  findAll,
  addNew,
  update,
  clear
}