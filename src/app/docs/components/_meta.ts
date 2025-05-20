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
  create:{
    title: "Create Functions",
    type: 'doc',
  },
  insert:{
    title: "Insert Function",
    type: 'doc',
  },
  update:{
    title: 'Update Function',
    type: 'doc',
  },
  select:{
    title: "Select Function"
  },
  delete:{
    title: "Delete Functions",
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