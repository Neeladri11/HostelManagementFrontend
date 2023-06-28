import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};
const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Dataset 1',
            data: 'data',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Dataset 2',
            data: 'data',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};
const DashboardHome = () => {

    return (
        <>
            <section>
                <div className="flex flex-wrap gap-16 justify-center">
                    <div className="card w-1/3 hover:bg-orange-500 bg-orange-400 py-10 px-5 rounded shadow">
                        <h4 className="text-2xl font-bold text-white">Total Students</h4>
                        <h4 className="text-2xl font-bold text-white">0</h4>
                    </div>
                    <div className="card w-1/3 hover:bg-green-500 bg-green-400 py-10 px-5 rounded shadow">
                        <h4 className="text-2xl font-bold text-white">Total Students</h4>
                        <h4 className="text-2xl font-bold text-white">0</h4>
                    </div>
                    <div className="card w-1/3 hover:bg-amber-500 bg-amber-400 py-10 px-5 rounded shadow">
                        <h4 className="text-2xl font-bold text-white">Total Students</h4>
                        <h4 className="text-2xl font-bold text-white">0</h4>
                    </div>
                    <div className="card w-1/3 hover:bg-sky-500 bg-sky-400 py-10 px-5 rounded shadow">
                        <h4 className="text-2xl font-bold text-white">Total Students</h4>
                        <h4 className="text-2xl font-bold text-white">0</h4>
                    </div>
                </div>
            </section>
            {}
        </>
    );
};

export default DashboardHome;

