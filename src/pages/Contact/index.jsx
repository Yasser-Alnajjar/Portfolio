import { useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

import { Button, Input } from '../../components';
import Title from '../../components/Title';
import Label from '../../components/ui/Label';

const formEmpty = {
  name: '',
  email: '',
  message: '',
};

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(formEmpty);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    if (form.email !== '' && form.name !== '' && form.message !== '') {
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_KEY,
          import.meta.env.VITE_TEMPLATE_KEY,
          {
            from_name: form.name,
            from_email: form.email,
            to_name: 'Yasser Alnajjar',
            to_email: 'yasseralnajjar72@gmail.com',
            message: form.message,
          },
          import.meta.env.VITE_PUBLIC_KEY,
        )
        .then(() => {
          setLoading(false);
          setForm(formEmpty);
          toast.success(
            'Thank You. I will get back to you as soon as possible.',
          );
        })
        .catch(() => {
          toast.error('Something went wrong.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  return (
    <section className="projects">
      <Title className="justify-start" line>
        Get in touch
      </Title>
      <div className="get-in-touch flex flex-column gap-2 mb-10">
        <p className="w-md-50">Fill in the form to start a conversation</p>
        <p className="w-md-50">
          You can contact me with any questions, suggestions or just to say hi.
          I am always open to new ideas and collaborations. It can be anything
          like collaborating on good projects or startups or anime or gaming or
          anything else.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-12 col-sm-6">
            <Label>Full Name</Label>
            <Input
              onChange={handleChange}
              value={form.name}
              name="name"
              placeholder="Full Name"
              type="text"
            />
          </div>
          <div className="col-12 col-sm-6">
            <Label>Email</Label>
            <Input
              onChange={handleChange}
              value={form.email}
              name="email"
              placeholder="Email"
              type="email"
            />
          </div>
          <Label>Message</Label>
          <div className="col-12">
            <Input
              onChange={handleChange}
              value={form.message}
              name="message"
              placeholder="Message"
              textarea
              type="text"
            />
          </div>
          <div className="col-12">
            <Button variant="danger">{loading ? 'Sending...' : 'Send'}</Button>
          </div>
        </div>
      </form>
    </section>
  );
}
