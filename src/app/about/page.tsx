'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import CustomSocialLinks from '@/components/CustomSocialLinks'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Book, Code, Coffee } from '@/components/Icons'

const RenderContent = ({ content }: { content: string }) => {
  const parts = content.split(/(\[.*?\]\(.*?\))/g)

  return (
    <>
      {parts.map((part, index) => {
        const linkMatch = part.match(/\[(.*?)\]\((.*?)\)/)
        if (linkMatch) {
          const [_, text, url] = linkMatch
          return (
            <Link
              key={index}
              href={url}
              className="text-primary hover:underline transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {text}
            </Link>
          )
        }
        return <span key={index}>{part}</span>
      })}
    </>
  )
}

export default function AboutPage() {
  return (
    <AnimatePresence>
      <div className="py-5">
        <div className="sm:grid grid-cols-8 px-6 py-5 sm:py-9 gap-5 container max-w-5xl mx-auto">
          <div className="col-span-5 max-w-md">
            <div className="hidden sm:block flex justify-between">
              <div>
                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                  className="text-xl sm:text-4xl pb-2 font-bold"
                >
                  Muhammed Ali
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                  className="text-sm text-muted-foreground text-base sm:text-2xl pb-2"
                >
                  Independent Sofware Developer
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1,
                    duration: 0.8,
                    ease: 'easeOut',
                  }}
                  className="my-3 space-x-2 md:space-x-3 pb-2"
                >
                  <CustomSocialLinks
                    platforms={[
                      'Github',
                      'Instagram',
                      'Telegram',
                      'Twitter',
                      'Spotify',
                    ]}
                    iconClassName="h-6 w-6 hover:scale-95 transition-transform duration-200"
                    className="gap-8"
                  />
                </motion.div>
              </div>
            </div>
            <div className="sm:hidden flex justify-center text-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    ease: 'circInOut',
                  }}
                  className="sm:hidden col-span-3 pb-5 flex justify-center dark:text-[#F1F2F4] text-center"
                >
                  <Image
                    alt="Profile Picture"
                    src="/mamiiblt.jpg"
                    width="140"
                    height="140"
                    quality="50"
                    className="rounded-[35px]"
                  />
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                  className="text-xl sm:text-4xl pb-2 font-bold text-center"
                >
                  Muhammed Ali
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
                  className="text-sm sm:text-2xl text-muted-foreground text-base pb-2 font-normal text-center"
                >
                  Independent Software Developer
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 1,
                    duration: 0.8,
                    ease: 'easeOut',
                  }}
                  className="my-3 space-x-2 md:space-x-3 pb-4"
                >
                  <CustomSocialLinks
                    platforms={[
                      'Github',
                      'Instagram',
                      'Telegram',
                      'Twitter',
                      'Spotify',
                    ]}
                    iconClassName="h-6 w-6 hover:scale-95 transition-transform duration-200"
                    className="gap-5"
                  />
                </motion.div>
              </div>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8, ease: 'easeOut' }}
              className="text-center sm:text-left text-muted-foreground text-base pb-4"
            >
              Hello! Usually I'm working mainly on Android development, Web, AI
              and some reverse engineering projects / apps in my free times.
              When I'm not crafting code, you can find me summoning solutions to
              problems on online judges. Just don't ask me to cast any love
              spells, my magic only works on machines!{' '}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2,
                duration: 0.8,
                ease: 'easeOut',
              }}
              className="mb-4"
            >
              <Button
                size={'lg'}
                variant={'outline-gradient'}
                className="w-full text-center justify-content sm:w-auto transform hover:scale-105 transition-transform duration-200"
              >
                <Code />
                <Link href="/projects" className="ml-2">
                  Visit My Projects
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2.4,
                duration: 0.8,
                ease: 'easeOut',
              }}
              className="mb-4"
            >
              <Button
                size={'lg'}
                variant={'outline-gradient'}
                className="w-full text-center justify-content sm:w-auto transform hover:scale-105 transition-transform duration-200"
              >
                <Book />
                <Link href="/blogs" className="ml-2">
                  Read My Articles
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 2.6,
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <Button
                size={'lg'}
                variant={'outline-gradient'}
                className="w-full text-center justify-content sm:w-auto transform hover:scale-105 transition-transform duration-200"
              >
                <Coffee />
                <Link href="https://buymeacoffee.com/mamiiblt" className="ml-2">
                  Buy Me A Coffee
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: 'circInOut',
            }}
            className="hidden sm:block col-span-3"
          >
            <Image
              alt="Profile Picture"
              src="/mamiiblt.jpg"
              width="450"
              height="500"
              quality="50"
              className="rounded-md"
            />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  )
}
