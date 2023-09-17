using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace SquareWall
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button3_Click(object sender, EventArgs e)
        {

        }

        private void button3_Click_1(object sender, EventArgs e)
        {

        }

        private void SquareWall_Load(object sender, EventArgs e)
        {

        }

        private void label1_Click(object sender, EventArgs e)
        {

        }

        private void PLAY1_Click(object sender, EventArgs e)
        {

            Form2 nuovoForm = new Form2(this);

            nuovoForm.Show();

            this.Hide();

        }

        private void button2_Click(object sender, EventArgs e)
        {
            Form3 nuovoForm = new Form3(this);

            nuovoForm.Show();

            this.Hide();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Form4 nuovoForm = new Form4(this);

            nuovoForm.Show();

            this.Hide();
        }
    }
}

