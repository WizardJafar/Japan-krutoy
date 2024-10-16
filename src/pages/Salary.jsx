import React from 'react'
import Image from '../assets/photo_2024-10-04_10-31-21.jpg';

const Salary = () => {
  return (
    <div class="min-h-screen flex items-center justify-center p-6 border-gray-400 shadow-md shadow-gray-400 mt-10 w-full rounded-lg">
    <div class="grid grid-cols-3 gap-6 w-full ">
        <div class="col-span-1 bg-white p-6 rounded-lg border-gray-400 shadow-md shadow-gray-400 h-72">
            <div class="mb-6">
                <div class="flex items-center space-x-4">
                    <div class="bg-gray-300 rounded-full h-12 w-12"><img src={Image} alt="" className="rounded-full"/></div>
                    <div>
                        <h1 class="text-xl font-semibold">Mirzaaliyev Bekzod</h1>
                    </div>
                </div>
            </div>
            <div class="space-y-4">
                <div>
                    <label class="block text-sm font-medium">O'quvchilar soni</label>
                    <div class="text-lg">73</div>
                </div>
                <div>
                    <label class="block text-sm font-medium">Guruhlar soni</label>
                    <div class="text-lg">12</div>
                </div>
                <div>
                    <label class="block text-sm font-medium">Grade</label>
                    <div class="text-lg">Senior</div>
                </div>
            </div>
        </div>

        <div class="col-span-2 bg-white p-6 rounded-lg border-gray-400 shadow-md shadow-gray-400 w-full">
            <div class="flex justify-between mb-6">
                <h2 class="text-xl font-semibold">Groups <span class="text-red-500">(август)</span></h2>
                <div class="text-3xl font-semibold text-green-500">17,482,507 so'm</div>
            </div>
            <div class="divide-y">
                <div class="flex justify-between py-3">
                    <span>FRONT-826</span>
                    <span>1,510,167 so'm</span>
                </div>
                <div class="flex justify-between py-3">
                    <span>FRONT-908</span>
                    <span>1,012,915 so'm</span>
                </div>
                <div class="flex justify-between py-3">
                    <span>FRONT-926</span>
                    <span>1,878,503 so'm</span>
                </div>
                <div class="flex justify-between py-3">
                    <span>INPR-961</span>
                    <span>1,795,000 so'm</span>
                </div>
                <div class="flex justify-between py-3">
                    <span>FRONT-998</span>
                    <span>2,136,337 so'm</span>
                </div>
                <div class="flex justify-between py-3">
                    <span>FRONT-1012</span>
                    <span>1,473,336 so'm</span>
                </div>
                <div class="flex justify-between py-3">
                    <span>FRONT-1010</span>
                    <span>1,399,665 so'm</span>
                </div>
                <div class="flex justify-between py-3">
                    <span>INPR-1021</span>
                    <span>1,795,000 so'm</span>
                </div>
                <div class="flex justify-between py-3">
                    <span>1063</span>
                    <span>1,326,000 so'm</span>
                </div>
                <div class="flex justify-between py-3">
                    <span>1087</span>
                    <span>847,169 so'm</span>
                </div>
                <div class="flex justify-between py-3">
                    <span>INPR-1641</span>
                    <span>1,645,417 so'm</span>
                </div>
                <div class="flex justify-between py-3">
                    <span>F2-1703</span>
                    <span>662,998 so'm</span>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Salary