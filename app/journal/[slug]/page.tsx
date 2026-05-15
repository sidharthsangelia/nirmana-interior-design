import Image from "next/image";
import Link from "next/link";

export default function JournalArticlePage() {
  return (
    <main
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      <section className="relative h-[92vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=90&w=1600"
          alt="Journal Hero"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.72), rgba(0,0,0,0.08))",
          }}
        />

        <div className="absolute bottom-0 left-0 p-8 lg:p-20 max-w-5xl">
          <div className="flex flex-col gap-8">
            <span className="font-sans text-[8px] tracking-[0.42em] uppercase text-white/60">
              Editorial · 6 min read
            </span>

            <h1
              className="font-cormorant leading-[0.88] text-white"
              style={{
                fontSize: "clamp(60px, 8vw, 132px)",
                fontWeight: 500,
              }}
            >
              What silence
              <br />
              looks like in
              <br />
              modern Indian homes
            </h1>

            <p className="max-w-lg text-sm leading-[1.9] text-white/72 font-sans">
              Luxury today is no longer defined by ornament.
              The most sophisticated homes are often the quietest.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-16 py-32">
        <div className="max-w-[720px] mx-auto">
          <article
            className="font-sans text-[17px] leading-[2]"
            style={{
              color: "var(--muted-foreground)",
            }}
          >
            <p>
              The most luxurious spaces today rarely try to
              announce themselves. They do not rely on spectacle,
              excess, or visual noise. Instead, they create a
              slower emotional experience.
            </p>

            <br />
            <br />

            <p>
              In many contemporary Indian homes, a quiet shift is
              taking place. Rooms are becoming calmer. Materials
              are becoming more tactile. Architecture is moving
              away from performance and toward atmosphere.
            </p>

            <br />
            <br />

            <blockquote
              className="font-cormorant italic leading-[1.1] py-20"
              style={{
                fontSize: "clamp(42px, 5vw, 82px)",
                color: "var(--foreground)",
              }}
            >
              The most luxurious spaces
              rarely try to impress.
            </blockquote>

            <p>
              Silence in architecture is not emptiness.
              It is precision. It is the removal of everything
              unnecessary until proportion, light, shadow,
              and material are allowed to breathe naturally.
            </p>

            <br />
            <br />

            <div className="relative aspect-[16/10] my-24 overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=90&w=1600"
                alt="Interior"
                fill
                className="object-cover"
              />
            </div>

            <p>
              The emotional experience of a room is often shaped
              less by what is added and more by what is withheld.
              The restraint itself becomes the design language.
            </p>
          </article>
        </div>
      </section>

      <section className="px-6 lg:px-16 pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-20">
            <h2
              className="font-cormorant"
              style={{
                fontSize: "clamp(42px, 4vw, 72px)",
                color: "var(--foreground)",
                fontWeight: 500,
              }}
            >
              Related Essays
            </h2>

            <Link
              href="/journal"
              className="font-sans text-[8px] uppercase tracking-[0.38em]"
              style={{
                color: "var(--muted-foreground)",
              }}
            >
              Back to Journal
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-20">
            <Link href="/journal/the-language-of-stone">
              <div className="flex flex-col gap-8 group">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494526585095-c41746248156?q=90&w=1600"
                    alt="Stone"
                    fill
                    className="object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <h3
                  className="font-cormorant leading-[0.98]"
                  style={{
                    fontSize: "clamp(36px, 3vw, 54px)",
                    color: "var(--foreground)",
                    fontWeight: 500,
                  }}
                >
                  The language of stone and why it changes a room
                </h3>
              </div>
            </Link>

            <Link href="/journal/light-as-architecture">
              <div className="flex flex-col gap-8 group mt-24">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=90&w=1600"
                    alt="Light"
                    fill
                    className="object-cover transition-transform duration-[2200ms] ease-out group-hover:scale-[1.03]"
                  />
                </div>

                <h3
                  className="font-cormorant leading-[0.98]"
                  style={{
                    fontSize: "clamp(36px, 3vw, 54px)",
                    color: "var(--foreground)",
                    fontWeight: 500,
                  }}
                >
                  Light is not decoration. It is architecture
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}