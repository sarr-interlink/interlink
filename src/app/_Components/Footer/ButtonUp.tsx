import { Button } from "@/components/ui/button"

export const ButtonUp = () => {
    return (
        <Button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 h-12 w-12 flex items-center justify-center rounded-full bg-primary/80 text-white shadow-lg shadow-primary/20 transition-all hover:scale-110 hover:shadow-primary/40 active:scale-95 z-50"
        aria-label="Scroll to top">
            <i className="lni lni-arrow-up text-xl"></i>
        </Button>
    )
}