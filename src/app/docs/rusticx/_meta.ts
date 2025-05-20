import type { MetaRecord } from 'nextra'

const meta: MetaRecord = {
  index: {
    type: 'page',
    display: 'hidden',
  },
  overview: {
    type: 'doc',
    title: "Overview"
  },
  '_1':{
    title:'Functions',
    type:'separator',
  },
  create:{
    title: "Create",
    type: 'doc',
  },
  insert:{
    title: "Insert",
    type: 'doc',
  },
  update:{
    title: 'Update',
    type: 'doc',
  },
  select:{
    title: "Select"
  },
  delete:{
    title: "Delete",
  },
  '_2':{
    type: 'separator',
    title: "Types",
  },
  struct:{
    title: "Struct"
  },
  enums:{
    title: "Enums",
  },
  errors: {
    title: "Errors"
  },
  model: {
    title: "Model"
  }
  
}

export default meta