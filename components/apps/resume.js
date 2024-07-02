import React, { useState } from "react"
import ReactMarkdown from "react-markdown"
import { useGithubData } from "./githubdata"
import jsPDF from "jspdf"
import {
  useMakeCopilotReadable,
  useMakeCopilotActionable,
} from "@copilotkit/react-core"

export const CoverLetterAndResume = () => {
  const { resumeData } = useGithubData()
  const [createCoverLetterAndResume, setCreateCoverLetterAndResume] = useState({
    letter: "",
    resume: "",
  })

  useMakeCopilotReadable(JSON.stringify(resumeData))

  useMakeCopilotActionable(
    {
      name: "createCoverLetterAndResume",
      description:
        "Create a cover letter and resume for a software developer job application.",
      argumentAnnotations: [
        {
          name: "coverLetterMarkdown",
          type: "string",
          description:
            "Markdown text for a cover letter to introduce yourself and briefly summarize your professional background as a software developer.",
          required: true,
        },
        {
          name: "resumeMarkdown",
          type: "string",
          description:
            "Markdown text for a resume that displays your professional background and relevant skills.",
          required: true,
        },
      ],
      implementation: async (coverLetterMarkdown, resumeMarkdown) => {
        setCreateCoverLetterAndResume((prevState) => ({
          ...prevState,
          letter: coverLetterMarkdown,
          resume: resumeMarkdown,
        }))
      },
    },
    []
  )

  function addTextToPDF(doc, text, x, y, maxWidth) {
    const lines = doc.splitTextToSize(text, maxWidth)
    doc.text(lines, x, y)
  }

  useMakeCopilotActionable(
    {
      name: "downloadPdfs",
      description: "Download pdfs of the cover letter and resume.",
      argumentAnnotations: [
        {
          name: "coverLetterPdfA4",
          type: "string",
          description:
            "A Pdf that contains the cover letter converted from markdown text and fits A4 paper.",
          required: true,
        },
        {
          name: "resumePdfA4Paper",
          type: "string",
          description:
            "A Pdf that contains the resume converted from markdown text and fits A4 paper.",
          required: true,
        },
      ],
      implementation: async () => {
        const marginLeft = 10
        const marginTop = 10
        const maxWidth = 180

        const coverLetterDoc = new jsPDF()
        addTextToPDF(
          coverLetterDoc,
          createCoverLetterAndResume.letter,
          marginLeft,
          marginTop,
          maxWidth
        )
        coverLetterDoc.save("coverLetter.pdf")

        const resumeDoc = new jsPDF()
        addTextToPDF(
          resumeDoc,
          createCoverLetterAndResume.resume,
          marginLeft,
          marginTop,
          maxWidth
        )
        resumeDoc.save("resume.pdf")
      },
    },
    [createCoverLetterAndResume]
  )

  useMakeCopilotActionable(
    {
      name: "updateCoverLetter",
      description:
        "Update cover letter for a software developer job application.",
      argumentAnnotations: [
        {
          name: "updateCoverLetterMarkdown",
          type: "string",
          description:
            "Update markdown text for a cover letter to introduce yourself and briefly summarize your professional background as a software developer.",
          required: true,
        },
      ],
      implementation: async (updatedCoverLetterMarkdown) => {
        setCreateCoverLetterAndResume((prevState) => ({
          ...prevState,
          letter: updatedCoverLetterMarkdown,
        }))
      },
    },
    []
  )

  useMakeCopilotActionable(
    {
      name: "updateResume",
      description: "Update resume for a software developer job application.",
      argumentAnnotations: [
        {
          name: "updateResumeMarkdown",
          type: "string",
          description:
            "Update markdown text for a resume that displays your professional background and relevant skills.",
          required: true,
        },
      ],
      implementation: async (updatedResumeMarkdown) => {
        setCreateCoverLetterAndResume((prevState) => ({
          ...prevState,
          resume: updatedResumeMarkdown,
        }))
      },
    },
    []
  )

  return <CoverLetterResume {...createCoverLetterAndResume} />
}

const CoverLetterResume = ({ letter, resume }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 bg-slate-50 py-4">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-3xl font-semibold leading-6 text-gray-900">
            ResumeBuilder
          </h1>
        </div>
      </div>
      <div className="mt-8 flow-root bg-slate-200">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div>
              <h2 className="text-lg font-semibold leading-6 text-gray-900 mb-4 p-2">
                Cover Letter
              </h2>
              <div className="min-w-full divide-y divide-gray-300 p-2">
                <div className="divide-y divide-gray-200 bg-white p-2">
                  <ReactMarkdown>{letter}</ReactMarkdown>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root bg-slate-200">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div>
              <h2 className="text-lg font-semibold leading-6 text-gray-900 mb-4 p-2">
                Cover Letter Preview
              </h2>
              <div className="min-w-full divide-y divide-gray-300">
                <div className="divide-y divide-gray-200 bg-white">
                  <textarea
                    className="p-2"
                    id="coverLetter"
                    value={letter}
                    rows={20}
                    cols={113}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root bg-slate-200">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold leading-6 text-gray-900 mb-4 p-2">
              Resume
            </h2>
            <div className="min-w-full divide-y divide-gray-300">
              <div className="divide-y divide-gray-200 bg-white">
                <ReactMarkdown>{resume}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flow-root bg-slate-200">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div>
              <h2 className="text-lg font-semibold leading-6 text-gray-900 mb-4 p-2">
                Resume Preview
              </h2>
              <div className="min-w-full divide-y divide-gray-300">
                <div className="divide-y divide-gray-200 bg-white">
                  <textarea
                    className="p-2"
                    id="resume"
                    value={resume}
                    rows={20}
                    cols={113}
                    readOnly
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
