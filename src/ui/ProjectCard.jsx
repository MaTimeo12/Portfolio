import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

/**
 * ProjectCard - carte réutilisable de projet
 * props: { title, description, tags: string[], image?: string, repo?: string, demo?: string }
 */
export default function ProjectCard({ title, description, tags = [], image, repo, demo }) {
  return (
    <article className="card-glass p-4 md:p-5 animate-fadeUp">
      <div className="flex flex-col md:flex-row gap-4">
        {image && (
          <img src={image} alt="miniature projet" className="w-full md:w-48 h-32 object-cover rounded-lg border border-scLight/10" />
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-scWhite">{title}</h3>
          <p className="text-sm text-scLight mt-1">{description}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((t) => (
              <span key={t} className="text-xs px-2 py-1 rounded bg-scDark border border-scLight/20 text-scLight">{t}</span>
            ))}
          </div>
          {(repo || demo) && (
            <div className="flex items-center gap-3 mt-4">
              {repo && (
                <a className="link-underline flex items-center gap-1" href={repo} target="_blank" rel="noreferrer">
                  <Github size={16} /> Code
                </a>
              )}
              {demo && (
                <a className="link-underline flex items-center gap-1" href={demo} target="_blank" rel="noreferrer">
                  <ExternalLink size={16} /> Demo
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
