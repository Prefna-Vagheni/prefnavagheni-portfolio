import { useFormStatus } from 'react-dom';
import { Terminal, Send, Loader2 } from 'lucide-react';

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={`flex items-center justify-center gap-2 px-8 py-3 rounded-full transition-all font-sans font-bold uppercase text-xs tracking-widest ${
        pending
          ? 'bg-accent/50 text-white cursor-not-allowed'
          : 'bg-foreground text-background hover:bg-accent hover:text-white'
      }`}
    >
      {pending ? (
        <>
          Executing... <Loader2 size={14} className="animate-spin" />
        </>
      ) : (
        <>
          Send Command <Send size={14} />
        </>
      )}
    </button>
  );
}
