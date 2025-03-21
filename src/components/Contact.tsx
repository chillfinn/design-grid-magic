
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AtSign, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      toast({
        title: "Message sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      });
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-mono text-sm tracking-wide mb-3">Get In Touch</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Contact Me</h2>
          <p className="text-muted-foreground text-lg">
            Have a project in mind? Let's discuss how we can work together to create 
            something amazing.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5 space-y-8">
            <div className="glass p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 rounded-md bg-accent/10 text-accent mr-4 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Location</h4>
                    <p className="text-muted-foreground text-sm">San Francisco, CA</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-md bg-accent/10 text-accent mr-4 mt-1">
                    <AtSign className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">hello@designengineer.dev</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 rounded-md bg-accent/10 text-accent mr-4 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Phone</h4>
                    <p className="text-muted-foreground text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-4">Availability</h3>
              <p className="text-muted-foreground text-sm mb-4">
                I'm currently available for freelance work and select full-time opportunities.
              </p>
              <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div className="bg-accent h-full w-3/4 rounded-full"></div>
              </div>
              <p className="text-sm text-right mt-2 text-muted-foreground">75% Available</p>
            </div>
          </div>
          
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass p-8 rounded-xl border border-white/10">
              <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-accent/50 h-12"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10 focus:border-accent/50 h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 focus:border-accent/50 min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-accent hover:bg-accent/80 text-white h-12"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      Send Message <Send className="ml-2 h-4 w-4" />
                    </span>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
