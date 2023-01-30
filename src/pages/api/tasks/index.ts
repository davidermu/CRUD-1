// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from 'utils/mongoose'
import Task from 'models/Tasks'
import type { NextApiRequest, NextApiResponse } from 'next'

dbConnect();

export default async function  handler(req: NextApiRequest,res: NextApiResponse){
  const task = await Task.find()
  console.log(task)

  res.status(200).json("tasks")
}
