import { useEffect, useState } from "react";
import { Loader2Icon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";

import type { Project } from "../types";
import Footer from "../components/Footer";
import api from "@/config/axios";

const Community = () => {
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState<Project[]>([]);
    const navigate = useNavigate();

    const fetchProjects = async () => {
        try {
            const { data } = await api.get(`/api/project/published`);
            setProjects(data.projects);
            setLoading(false);
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message ||
                    error.message ||
                    "Something went wrong"
            );
            console.error(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects();
    }, []);

    return (
        <>
            <div className="px-4 md:px-16 lg:px-24 xl:px-32">
                {loading ? (
                    <div className="flex items-center justify-center h-[80vh]">
                        <Loader2Icon className="size-7 animate-spin text-indigo-700" />
                    </div>
                ) : projects.length > 0 ? (
                    <div className="py-10 min-h-[80vh]">
                        <div className="flex items-center justify-between mb-12">
                            <h1 className="text-2xl font-medium text-white">
                                Published Projects
                            </h1>
                        </div>

                        <div className="flex flex-wrap gap-3.5">
                            {projects.map((project: Project) => (
                                <Link
                                    to={`/view/${project.id}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={project.id}
                                    className="w-72 max-sm:mx-auto cursor-pointer bg-gray-900/60 border border-gray-700 rounded-lg overflow-hidden group hover:border-indigo-800/80 transition-all duration-300"
                                >
                                    {/* Desktop like mini preview */}
                                    <div className="relative w-full h-40 bg-gray-900 overflow-hidden border-b border-gray-800">
                                        {project.current_code ? (
                                            <iframe
                                                srcDoc={project.current_code}
                                                className="absolute top-0 left-0 w-[1200px] h-[800px] origin-top-left pointer-events-none"
                                                sandbox="allow-scripts allow-same-origin"
                                                style={{
                                                    transform: "scale(0.25)",
                                                }}
                                            />
                                        ) : (
                                            <div className="flex items-center justify-center h-full text-gray-500">
                                                No Preview Available
                                            </div>
                                        )}
                                    </div>

                                    {/* Project Details */}
                                    <div className="p-4 text-white bg-gradient-to-b from-transparent to-transparent group-hover:from-indigo-950 transition-colors">
                                        <div className="flex items-start justify-between">
                                            <h2 className="text-lg font-medium line-clamp-2">
                                                {project.name}
                                            </h2>
                                            <button className="px-2.5 py-0.5 mt-1 ml-2 text-xs bg-gray-800 border border-gray-700 rounded-full">
                                                Website
                                            </button>
                                        </div>

                                        <p className="text-gray-400 mt-1 text-sm line-clamp-2">
                                            {project.initial_prompt}
                                        </p>

                                        <div className="flex justify-between items-center mt-6">
                                            <span className="text-xs text-gray-500">
                                                {new Date(
                                                    project.createdAt
                                                ).toLocaleDateString()}
                                            </span>
                                            <div className="flex gap-3 text-white text-sm">
                                                <button className="px-3 py-1.5 bg-white/10 hover:bg-white/15 rounded-md transition-colors flex items-center gap-2">
                                                    <span className="bg-gray-200 size-4.5 rounded-full text-black font-semibold flex items-center justify-center">
                                                        {project?.user?.name?.slice(
                                                            0,
                                                            1
                                                        )}
                                                    </span>
                                                    {project?.user?.name}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center h-[80vh]">
                        <h1 className="text-3xl font-semibold text-gray-300">
                            No projects published yet!
                        </h1>
                        <button
                            onClick={() => navigate("/")}
                            className="text-white px-5 py-2 mt-5 rounded-md bg-indigo-500 hover:bg-indigo-600 active:scale-95 transition-all"
                        >
                            Create New Project
                        </button>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Community;
